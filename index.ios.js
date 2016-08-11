import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // toggle state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let text;

    if (this.state.showText) {
      text = <Text>{this.props.text}</Text>;
    } else {
      text = null;
    }

    return (
      <View>
        {text}
      </View>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <Blink text="Hello my name is Steven." />
    );
  }
}

AppRegistry.registerComponent('helloWorld', () => BlinkApp);
