import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {
  render() {
    return (
      <View style={{ paddingTop: 22 }}>
        <Text>Current Scene: {this.props.title}</Text>

        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

MyScene.propTypes = {
  onBack: React.PropTypes.func.isRequired,
  onForward: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
};
