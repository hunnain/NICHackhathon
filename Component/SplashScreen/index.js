import React, {Component} from 'react';
import {StyleSheet, Animated, View} from 'react-native';
import { Container, Text, Spinner, Button} from 'native-base';


export default class SplashScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
          fadeAnim: new Animated.Value(0),
            loader: false
        }
    }
    componentDidMount() {
      Animated.timing(           
        this.state.fadeAnim,   
        {
          toValue: 1,         
          duration: 3000, 
        }
      ).start(); 
      setTimeout((data)=>{
       this.setState({
         loader : true
       }) 
      },4000)
    }
  render() {
    const {loader, fadeAnim} = this.state;
    return (
      <Container style={styles.container}>
          <Animated.View style={{ opacity: fadeAnim}}>
          <Text style={styles.welcome}>Just Flick</Text>
          </Animated.View>
        {
          (loader)?
          <Spinner color='#E8EEF0' />   
          :
          <View></View>
        }
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0091E0',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#E8EEF0'
  },
});
