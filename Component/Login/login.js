import React, {Component} from 'react';
import {StyleSheet, Animated, View} from 'react-native';
import { Container, Text, Spinner, Button} from 'native-base';
import firebase from 'react-native-firebase';


class Login extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <Container style={styles.container}>
               <Text style={styles.justShake}>Just Shake</Text>
               <View style={styles.fbLoginContainer}>
                <Button block style={styles.fbLoginBtn}>
                    <Text style={styles.fbLoginTxt}>Login With Facebook</Text>
                </Button>
               </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#24A8FF',
    },
    justShake: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: '20%',
      color: '#E8EEF0'
    },
    fbLoginBtn: {
        
    },
    fbLoginTxt: {
        textAlign: 'center'
    },
    fbLoginContainer: {
    width: '80%',
    justifyContent: 'center',
    marginLeft: '10%',
    marginTop: '40%',
    alignItems: 'center',
    }
  });
  
export default Login;