import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import {styles, fixAuthor} from './HeadlineDetails';

export default function Headline(props) {
    var author = fixAuthor(props.author);
    return (
        <TouchableOpacity 
        style={styles.headline}
        onPress={()=> props.navigation.navigate('HeadlineDetails', {...props})}>
            <Image style={styles.headlineImage} source={{ uri: props.urlToImage }} />
            <View style={{ padding: 15 }}>
                <Text style={styles.headlineTitle}>{props.title}</Text>
                <Text>{author}</Text>
                <Text>{new Date(props.publishedAt).toLocaleString('en-US')}</Text>
            </View>
        </TouchableOpacity>
    );
}
