import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import {styles, fixAuthor} from './HeadlineDetails';

export default function Headline(props) {
    article = props.article;
    var author = fixAuthor(article.author);
    return (
        <TouchableOpacity 
        style={styles.headline}
        onPress={()=> props.navigation.navigate('HeadlineDetails', {article: props.article})}>
            <Image style={styles.headlineImage} source={{ uri: article.urlToImage }} />
            <View style={{ padding: 15 }}>
                <Text style={styles.headlineTitle}>{article.title}</Text>
                <Text>{author}</Text>
                <Text>{new Date(article.publishedAt).toLocaleString('en-US')}</Text>
            </View>
        </TouchableOpacity>
    );
}
