import React, { Component } from 'react';
import { Alert } from 'react-native';
import Main from './components/Main';


export default class App extends Component {
  componentDidMount() {
  }
  
  componentWillUnmount() {

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
