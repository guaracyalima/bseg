import React, {Component} from 'react'
import { PushNotificationIOS } from 'react-native';
import PushNotification from 'react-native-push-notification';

export default class PusherController extends Component {
  
  componentDidMount() {
    PushNotification.configure({
      
      onRegister: function(token) {
        console.log( 'TOKEN que veio de algum lugar desconhecido:', token );
      },
      
      
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      
      senderID: "755517338868",
      
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },
      
      popInitialNotification: true,
      
      
      requestPermissions: true,
      
      
    })
  }
  
  render(){
    return null;
  }
}
