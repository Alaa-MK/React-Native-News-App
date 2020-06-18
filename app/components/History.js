import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class History extends React.Component {
    constructor(){
        super();
    }
    render () {
        return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>History!</Text>
        </View>
        );
    }
}
