import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { getArticles } from '../utils/WebServices';
import Headline from './Headline'

export default class HeadlinesList extends React.Component {

    constructor() {        
        super();
        this.state = {
            isLoading: true,
            articles: []
        }
    }

    componentDidMount() {        
        getArticles(this.props.countries, this.props.categories, this.props.sources, this.props.highlightsOnly)
            .then(articles => {
                this.setState({ isLoading: false, articles: articles })
            })
            .catch(err => console.log(err));
    }

    render() {        
        const headlines = this.state.articles.map(article => <Headline navigation={this.props.navigation} {...article} />)
        return (
            this.state.isLoading ?
                <View style={{ justifyContent: 'center', height: '100%' }}>
                    <ActivityIndicator size="large" />
                </View>
                :
                <ScrollView>
                    {headlines}
                </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    // mainContainer:{
    //     backgroundColor: "#cccccc",
    // }
});