import React, { Component } from 'react';
import { Alert } from 'react-native';
import Pusher from 'pusher-js/react-native';
import Main from './components/Main';


export default class App extends Component {
  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', this.onConnectionChange)
  }
  
  componentWillUnmount() {
    NetInfo.removeEventListener('change', this.onConnectionChange)
  }
  
  onConnectionChange = connected =>  {
    console.log('Is connected? ', connected)
  }
  render() {
    return (
      <Main />
    );
  }
}
