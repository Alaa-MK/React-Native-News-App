import * as React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, Dimensions} from 'react-native';
import {getArticles} from '../utils/WebServices';

const {width, height} = Dimensions.get('window');

function Headline(props){
    return (
        <View style={styles.headline}>
            <Image 
                style={styles.headlineImage}
                source={{uri:props.imageURL}}
            />
            <View style={{padding: 15}}>
                <Text style={styles.headlineTitle}>{props.title}</Text>
                <Text>{props.author}</Text>
                <Text>{props.date}</Text>
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
        .then(res => {
            this.setState({isLoading: false, articles: res.articles})
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