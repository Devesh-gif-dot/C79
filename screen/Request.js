import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert,KeyboardAvoidingView,Modal, ScrollView } from 'react-native';
import {createAppContainer,createSwitcthNavigator} from 'react-navigation';
import * as firebase from 'firebase';
import db from '../config'


export default class Request extends Component{
    constructor(){
        super();
        this.state={
            bookName:"",
            reason:""
        }
    }
    render(){
        return(
            <View>
            <TextInput styles={styles.input}
            onChangeText={(text)=>{this.setState({bookName:text})}}
            placeholder={"Book Name"}/>
            <TextInput 
            style={styles.input}
            onChangeText={(text)=>{this.setState({reason:text})}}
            placeholder={"Reason Why you need this book (if none write --)"}/>
            <TouchableOpacity style={styles.button}><Text>Submit</Text></TouchableOpacity>
            </View>   
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      backgroundColor:'red',
      width:70,
      alignItems:'center',
      justifyContent:'center'
    },
    input:{
      width:100,
      height:30,
      color:'black',
      marginBottom:10,
      borderWidth:1,
      borderColor:'black'
    }
  });
    
