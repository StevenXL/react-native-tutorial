import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class FlexBoxBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={[style.basic, {backgroundColor: 'skyblue'}]}/>
        <View style={[style.basic, {backgroundColor: 'powderblue'}]}/>
        <View style={[style.basic, {backgroundColor: 'steelblue'}]}/>
      </View>
    );
  }
}

const style = {
  basic: {
    width: 50,
    height: 50,
  },
};

AppRegistry.registerComponent('helloWorld', () => FlexBoxBasics);
