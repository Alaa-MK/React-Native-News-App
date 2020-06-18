import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator } from '@react-navigation/stack';
import Highlights from "./app/components/Highlights"
import NewsSources from "./app/components/NewsSources"
import History from "./app/components/History"
import Headline from "./app/components/Headline"
import HeadlineDetails from "./app/components/HeadlineDetails"


const HomeStack = createStackNavigator();
function HighlightsStackScreen () {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Highlights" component={Highlights} />
      <HomeStack.Screen name="Headline" component={Headline} />
      <HomeStack.Screen name="HeadlineDetails" component={HeadlineDetails} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Highlights" component={HighlightsStackScreen} />
        <Tab.Screen name="NewsSources" component={NewsSources} />
        <Tab.Screen name="History" component={History} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
