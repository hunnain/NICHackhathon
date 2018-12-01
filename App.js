import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Text } from 'native-base';
import {Provider} from 'react-redux';
import store from './store';
import Routers from './Routers/index';

export default class App extends Component{
  render() {
    return (
         <Container>
          <Provider store={store}>
            <Routers />       
          </Provider>
         </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
