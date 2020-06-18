import * as React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

function Headline(props){
    return (
        <View style={{height:100, width:'100%', backgroundColor:'red'}}>
            <Image source="https://dvas0004.files.wordpress.com/2016/07/addthis-react-flux-javascript-scaling.png?w=640"/>
            <Text>Title</Text>
            <Text>Author</Text>
            <Text>Date</Text>
        </View>
    )
}

export default class Highlights extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){

    }
    render() {
        return (
            <ScrollView>
                <Headline />
            </ScrollView>
        );
    }
}