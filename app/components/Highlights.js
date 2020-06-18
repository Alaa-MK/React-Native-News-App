import * as React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, Dimensions} from 'react-native';
import {getArticles} from '../utils/WebServices';
import Headline from './Headline'

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
        const headlines = this.state.articles.map(art => <Headline detailed={false} article={art}/>)
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
    }
});