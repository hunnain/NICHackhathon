import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Text,  } from 'native-base';
import {Button} from 'native-base';


export default class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.welcome}>Just Flick</Text>
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
