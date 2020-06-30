import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { getArticles } from '../utils/WebServices';
import Headline from './Headline'
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class HeadlinesList extends React.Component {

    constructor() {        
        super();
    }

    componentDidMount() {        
        getArticles(this.props.countries, this.props.categories, this.props.sources, this.props.highlightsOnly)
        .then(articles => {
            this.props.store.setHeadlinesStillLoading(false);
            this.props.store.setHeadlines(articles);                
            })
            .catch(err => console.log(err));
    }

    render() {  
        const headlines = this.props.store.headlines.map(article => <Headline navigation={this.props.navigation} {...article} />)
        return (
            this.props.store.headlinesStillLoading ?
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