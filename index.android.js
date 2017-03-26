/**
 * Reposer
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class Reposer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Reposer!
        </Text>
        <Text style={styles.instructions}>
          To begin, enter your GitHub username and password
        </Text>
        <TextInput
          style={{height: 40, width: 150}}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{height: 40, width: 150}}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Reposer', () => Reposer);
