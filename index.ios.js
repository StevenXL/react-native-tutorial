import React, { Component } from 'react';
import { AppRegistry, Image, ListView, View, Text } from 'react-native';

class NetworkingBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "I am a quote from Steven's head."
    };

    // notice that fetch returns a promise that resolves with a Response object.
    // The Response object implements Body.
    fetch("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1")
      .then((response) => response.json())
      .then((json) => this.setState({ quote: json[0].content }));
  }

  render() {
    return (
      <View style={{ paddingTop: 22 }}>
        <Text>{this.state.quote}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('helloWorld', () => NetworkingBasics);
