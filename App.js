import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {getArticles} from "./app/utils/WebServices"
import Highlights from "./app/components/Highlights"
import NewsSources from "./app/components/NewsSources"
import History from "./app/components/History"

const Tab = createBottomTabNavigator();

export default function App() {
  getArticles();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Highlights" component={Highlights} />
        <Tab.Screen name="NewsSources" component={NewsSources} />
        <Tab.Screen name="History" component={History} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
