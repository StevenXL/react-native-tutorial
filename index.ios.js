import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={styles.small}>
        </View>
        <View style={styles.medium}>
        </View>
        <View style={styles.large}>
        </View>
      </View>
    );
  }
}

const styles = {
  small: {
    backgroundColor: 'powderblue',
    height: 50,
    width: 50,
  },
  medium: {
    backgroundColor: 'skyblue',
    height: 100,
    width: 100,
  },
  large: {
    backgroundColor: 'steelblue',
    height: 150,
    width: 150,
  },
};

AppRegistry.registerComponent('helloWorld', () => FixedDimensionsBasics);
