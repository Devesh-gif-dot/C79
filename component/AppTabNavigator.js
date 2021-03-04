import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator,createSwitcthNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Donate from '../screen/Donate';
import Request from '../screen/Request';


export const TabNavigator = createBottomTabNavigator({
  Donate:{screen:Donate},
  Request:{screen:Request}
})
