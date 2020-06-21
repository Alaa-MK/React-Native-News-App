import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator } from '@react-navigation/stack';
import Highlights from "./app/components/Highlights"
import NewsSources from "./app/components/NewsSources"
import History from "./app/components/History"
import Headline from "./app/components/Headline"
import HeadlineDetails from "./app/components/HeadlineDetails"
import SourceHeadlines from './app/components/SourceHeadlines'
import { AppRegistry } from 'react-native';


const HighlightsStack = createStackNavigator();
function HighlightsStackScreen () {
  return (
    <HighlightsStack.Navigator screenOptions={{ headerShown: false }}>
      <HighlightsStack.Screen name="Highlights" component={Highlights} />
      <HighlightsStack.Screen name="HeadlineDetails" component={HeadlineDetails} />
    </HighlightsStack.Navigator>
  );
}
const NewsSourcesStack = createStackNavigator();
function NewsSourcesStackScreen() {
  return (
    <HighlightsStack.Navigator screenOptions={{ headerShown: false }}>
      <HighlightsStack.Screen name="NewsSources" component={NewsSources} />
      <HighlightsStack.Screen name="SourceHeadlines" component={SourceHeadlines} />
      <HighlightsStack.Screen name="HeadlineDetails" component={HeadlineDetails} />
    </HighlightsStack.Navigator>
  );
}

const TabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator>
        <TabNav.Screen name="Highlights" component={HighlightsStackScreen} />
        <TabNav.Screen name="NewsSources" component={NewsSourcesStackScreen} />
        <TabNav.Screen name="History" component={History} />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}
