import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
    var params = props.route.params;
    
    var author = fixAuthor(params.author);
    return (
        <ScrollView 
        style={styles.headline}>
            <Image style={styles.headlineImage} source={{ uri: params.urlToImage }} />
            <View style={{ padding: 15 }}>
                <Text style={styles.headlineTitle}>{params.title}</Text>
                <Text>{author}</Text>
                <Text>{new Date(params.publishedAt).toLocaleString('en-US')}</Text>
                <Text style={styles.headlineContent}>{params.content}</Text>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => Linking.openURL(params.url)}>
                    <Text style={styles.buttonText}>Open URL</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export const styles = StyleSheet.create ({
  headline: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10
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
  headlineContent: {
      fontSize: 14
  },
  button:{
    backgroundColor: 'green',
    alignItems: 'center',
    width: width * 0.5,
    alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 40
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: 'white', 
  }
});
