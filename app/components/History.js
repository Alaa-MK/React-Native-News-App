import * as React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {load, store} from '../utils/StorageUtils'
import {styles, fixAuthor} from './HeadlineDetails'

export async function addArticleToHistory(title, author, source, dateTime) {
    var history = await load('history');
    if (history == null)
        history = {}
    history[title + '__' + author] = {  // I assume the title and author together is a unique key
        title,
        author: fixAuthor(author),
        source,
        timestamp: Date.now()
    };    
    
    return await store('history', history);
}

function HistoryItem(props){
    return(
        <View style={[styles.headline, {padding: 15}]}>
            <Text style={styles.headlineTitle}>{props.title}</Text>
            <Text>{props.author}</Text>
            <Text>{'Viewed at: ' + new Date(props.timestamp).toLocaleString('en-US')}</Text>
        </View>
    )
}

export default class History extends React.Component {
    constructor(){
        super();
        this.state = {
            history: {}
        }
        this.onScreenFocus = this.onScreenFocus.bind(this);
    }

    componentDidMount(){
        this.props.navigation.addListener('focus', this.onScreenFocus)
        load('history')
            .then(history => this.setState({ history: history }))
    }

    onScreenFocus(){
        load('history')
        .then(history => this.setState({history: history}))
    }

    render () {
        let historyItems = []
        
        if (this.state.history != null) {
            historyItems = Object.values(this.state.history)
            .sort((a,b) => a.timestamp < b.timestamp)
            .map(value => <HistoryItem {...value}/>)
        }
        return (
        <ScrollView>
            {historyItems}
        </ScrollView>
        );
    }
}
