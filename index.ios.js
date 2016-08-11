import React, { Component } from 'react';
import { AppRegistry, Image, View, Text } from 'react-native';

// notice stateless component
const Greeting = ({ name }) => <Text>Hello, {name}!</Text>;

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={styles.views}>
        <Greeting name="Ada" />
        <Greeting name="Steven" />
      </View>
    );
  }
}

const styles = {
  views: {
    alignItems: 'center',
  },
};

AppRegistry.registerComponent('helloWorld', () => LotsOfGreetings);
