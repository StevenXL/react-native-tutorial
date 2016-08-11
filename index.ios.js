import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.small} />
        <View style={styles.medium} />
        <View style={styles.large} />
      </View>
    );
  }
}

const styles = {
  small: {
    backgroundColor: 'powderblue',
    flex: 1,
  },
  medium: {
    backgroundColor: 'skyblue',
    flex: 2,
  },
  large: {
    backgroundColor: 'steelblue',
    flex: 3,
  },
};

AppRegistry.registerComponent('helloWorld', () => FlexDimensionsBasics);
