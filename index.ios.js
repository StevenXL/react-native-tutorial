import React, { Component } from 'react';
import { AppRegistry, Image, ListView, View, Text } from 'react-native';

class Lister extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jullian', 'Julie', 'Devin'
      ]),
    };
  }

  render() {
    return (
      <View style={{ paddingTop: 22 }} >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('helloWorld', () => Lister);
