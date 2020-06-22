import * as React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity} from 'react-native';
import {getNewsSources} from '../utils/WebServices'

function NewsSourceItem(props){
    return (
        <TouchableOpacity 
        style={styles.newsSourceContainer}
            onPress={() => props.navigation.navigate('SourceHeadlines', { countries: ['ALL'], categories: ['ALL'], sources: [props.id]})}>
            <Text style={styles.sourceName}>{props.name}</Text>
            <Text style={styles.sourceDescription}>{props.description}</Text>
        </TouchableOpacity>
    )
}

export default class NewsSources extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
            sources: []
        }
    }
    componentDidMount() {
        getNewsSources()
            .then(sources => {
                this.setState({ isLoading: false, sources: sources })
            })
            .catch(err => console.log(err));
    }

    render() {        
        const sources = this.state.sources.map(source => <NewsSourceItem navigation={this.props.navigation} {...source} />)
        return (
            this.state.isLoading ?
                <View style={{ justifyContent: 'center', height: '100%' }}>
                    <ActivityIndicator size="large" />
                </View>
                :
                <ScrollView>
                    {sources}
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    newsSourceContainer:{
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    sourceName:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    sourceDescription:{
        fontSize: 10
    }
})