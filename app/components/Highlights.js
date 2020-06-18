import * as React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, ActivityIndicator} from 'react-native';
import {getArticles} from '../utils/WebServices';

function Headline(props){
    return (
        <View style={{height:100, width:'100%'}}>
            <Image source="https://dvas0004.files.wordpress.com/2016/07/addthis-react-flux-javascript-scaling.png?w=640"/>
            <Text>{props.title}</Text>
            <Text>{props.author}</Text>
            <Text>{props.date}</Text>
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
        const headlines = this.state.articles.map(article => <Headline title={article.title} author={article.author} date={article.publishedAt} />)
        return (
            this.state.isLoading ? 
            <View style={{justifyContent: 'center', height: '100%'}}>
                <ActivityIndicator size="large"/>
            </View>
            :
            <ScrollView>
                {headlines}
            </ScrollView>
        );
    }
}