import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={[styles.text, styles.red]}>Just Red</Text>
        <Text style={[styles.text, styles.blue]}>Just Blue</Text>
        <Text style={[styles.text, styles.blue, styles.red]}>Blue, Then Red</Text>
        <Text style={[styles.text, styles.red, styles.blue]}>Red, Then Blue</Text>
      </View>
    );
  }
}

const styles = {
  view: {
    backgroundColor: '#DAF7A6',
  },
  text: {
    textAlign: 'center',
  },
  red: {
    color: 'red',
  },
  blue: {
    color: 'blue',
  },
};

AppRegistry.registerComponent('helloWorld', () => LotsOfStyles);
