import React, {Component} from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
    KeyboardAvoidingView
  } from "react-native";
  import firebase from "firebase";
  export default class LoginScreen extends Component{
      render(){
          return(
              <View>
                  <Text> Panatalla de acceso </Text>
              </View>
          )
      }
  }

  const styles = StyleSheet.create({
      loginBox:{
          width:300,
          height:40,
          borderWidth:1.5,
          fontSize:20,
          margin:10,
          paddingLeft:10
      }
  })