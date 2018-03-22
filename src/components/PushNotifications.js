import React, {Component} from 'react';
import Pusher from 'pusher-js/react-native';
import {pusher} from '../../env';
import {Alert} from 'react-native';

export default class PushNotifications extends Component {
  constructor(props) {
    super(props);
    Pusher.logToConsole = true;
  }
  
  componentWillMount() {
    
    const pn = new Pusher(pusher.id, {
      cluster: pusher.cluster,
      encrypted: pusher.encrypted,
    });
    
    const chanel = pn.subscribe('canelu');
    chanel.bind('event', data => {
      Alert(data.message());
    })
  }
}
