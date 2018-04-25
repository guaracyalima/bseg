import React, {Component} from 'react';
import Routes from './src/Routes';
import { AppRegistry } from 'react-native';
import OneSignal from 'react-native-onesignal';

export default class eat_for_me extends Component {
  
  componentDidMount(){
    OneSignal.addEventListener('opened', this.onOpened)
  }
  
  componentWillMount(){
    OneSignal.removeEventListener('opened', this.onOpened)
  }
  
  onOpened({ notification }){
    console.log('notificacao', notification)
  }
  render() {
    
    return (
        <Routes/>
    );
  }
}

AppRegistry.registerComponent('eat_for_me', () => eat_for_me);
