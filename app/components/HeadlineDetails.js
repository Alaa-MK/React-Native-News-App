import Headline from "./Headline";
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
const {width, height} = Dimensions.get ('window');

export function fixAuthor (originalAuthor) {
  //handle the case where author has the format <a href="...
  if (originalAuthor != null && originalAuthor.search (' href') != -1) {
    const s = originalAuthor.indexOf ('>');
    const e = originalAuthor.lastIndexOf ('<');
    return originalAuthor.substring (s + 1, e);
  }
  return originalAuthor == null ? 'غير معروف' : originalAuthor;
}

export default function HeadlineDetails (props){
    article = props.route.params.article;
    var author = fixAuthor(article.author);
    return (
        <View 
        style={styles.headline}>
            <Image style={styles.headlineImage} source={{ uri: article.urlToImage }} />
            <View style={{ padding: 15 }}>
                <Text style={styles.headlineTitle}>{article.title}</Text>
                <Text>{author}</Text>
                <Text>{new Date(article.publishedAt).toLocaleString('en-US')}</Text>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create ({
  mainContainer: {
    backgroundColor: '#e3e3e3',
  },
  headline: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  headlineTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headlineImage: {
    height: height * 0.3,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
