import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class helloWorld extends Component {
  render() {
    return (
      <Text>Hello World</Text>
    );
  }
}

AppRegistry.registerComponent('helloWorld', () => helloWorld);
