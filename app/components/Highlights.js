import * as React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, Dimensions} from 'react-native';
import {getArticles} from '../utils/WebServices';

const {width, height} = Dimensions.get('window');

function Headline(props){
    //handle the case where author has the format <a href="...
    var author = props.author;
    if (props.author != null && props.author.search(" href") != -1){
        const s = props.author.indexOf('>');
        const e = props.author.lastIndexOf('<');
        author = props.author.substring(s+1,e);
    }
    
    return (
        <View style={styles.headline}>
            <Image 
                style={styles.headlineImage}
                source={{uri:props.imageURL}}
            />
            <View style={{padding: 15}}>
                <Text style={styles.headlineTitle}>{props.title}</Text>
                <Text>{props.author == null ? "غير معروف" : author}</Text>
                <Text>{new Date(props.date).toLocaleString('en-US')}</Text>
            </View>
        </View>
    )
}

export default class Highlights extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
            articles:[]
        }
    }

    componentDidMount(){
        getArticles()
        .then(articles => {
            this.setState({isLoading: false, articles: articles})            
        })
        .catch(err => console.log(err));
    }

    render() {
        const headlines = this.state.articles.map(article => <Headline title={article.title} author={article.author} date={article.publishedAt} imageURL={article.urlToImage} />)
        return (
            this.state.isLoading ? 
            <View style={{justifyContent: 'center', height: '100%'}}>
                <ActivityIndicator size="large"/>
            </View>
            :
            <ScrollView style={styles.mainContainer}>
                {headlines}
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: "#e3e3e3",
    },
    headline:{
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 10
    },
    headlineTitle:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    headlineImage: {
        height: height * 0.3,
        borderTopRightRadius: 10, 
        borderTopLeftRadius: 10, 
    }
});