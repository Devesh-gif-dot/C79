import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator,createSwitcthNavigator} from 'react-navigation';
import LoginScreen from './screen/MyLoginScreen';
import {TabNavigator} from './component/AppTabNavigator' 

export default function App(){
  return (
    <View style={styles.container}>
    <AppConatiner />
    </View>
  );
}

const Switch = createSwitchNavigator({
  Login:{screen:LoginScreen},
  Navigator:{screen:TabNavigator}
})
const AppConatiner = createAppContainer(Switch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
