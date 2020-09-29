import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';

import PostsTabScreen from './screen/PostsTabScreen';
import ChartTabScreen from './screen/ChartTabScreen';
import ProfileTabScreen from './screen/ProfileTabScreen';

import CommentsScreen from './screen/CommentsScreen';

const StackScreen = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function TabScreen() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Posts" component={PostsTabScreen} />
      <BottomTab.Screen name="Chart" component={ChartTabScreen} />
      <BottomTab.Screen name="Profile" component={ProfileTabScreen} />
    </BottomTab.Navigator>
  )
}

function Route() {
  return(
    <NavigationContainer>
      <StackScreen.Navigator initialRouteName="Login">
        <StackScreen.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <StackScreen.Screen name="Register" component={RegisterScreen} />
        <StackScreen.Screen name="Home" component={TabScreen} options={{headerShown: false}} />
        <StackScreen.Screen name="Comments" component={CommentsScreen} />
      </StackScreen.Navigator>
    </NavigationContainer>
  )
}
export default Route;
