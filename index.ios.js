import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Routes from './src/Routes'
export default class eat_for_me extends Component {
  render() {
    return (
    <Routes />
    );
  }
}

AppRegistry.registerComponent('eat_for_me', () => eat_for_me);
