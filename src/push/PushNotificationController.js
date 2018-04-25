import React, { Component } from "react";

import { Platform } from 'react-native';

import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from "react-native-fcm";

export default class PushNotificationController extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    FCM.requestPermissions();
    
    FCM.getFCMToken().then(token => {
    });
    
    FCM.getInitialNotification().then(notif => {
    });
    
    this.notificationListner = FCM.on(FCMEvent.Notification, notif => {
      console.log("notificacao", notif);
      if(notif.local_notification){
        return;
      }
      if(notif.opened_from_tray){
        return;
      }
      
      if(Platform.OS ==='ios'){
        switch(notif._notificationType){
          case NotificationType.Remote:
            notif.finish(RemoteNotificationResult.NewData) //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
            break;
          case NotificationType.NotificationResponse:
            notif.finish();
            break;
          case NotificationType.WillPresent:
            notif.finish(WillPresentNotificationResult.All) //other types available: WillPresentNotificationResult.None
            break;
        }
      }
      this.showLocalNotification(notif);
    });
    
    this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, token => {
      console.log("TOKEN (refreshUnsubscribe)", token);
    });
  }
  
  showLocalNotification(notif) {
    console.log('ta rodando pra ver a niotufucacao')
    console.log('show notificacao', notif)
    FCM.presentLocalNotification({
      title: 'Brasal Corretora',
      body: notif.notification.body,
      priority: "high",
      click_action: "br.com.brasal.appclientes",
      local: true,
      id: new Date().valueOf().toString(),                // (optional for instant notification)
      sound: "bell.mp3",                                  // "default" or filename
      badge: 1,                                          // as FCM payload IOS only, set 0 to clear badges
      number: 1,                                         // Android only
      ticker: "My Notification Ticker",                   // Android only
      auto_cancel: true,                                  // Android only (default true)
      large_icon: "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg",                           // Android only
      icon: "ic_launcher",                                // as FCM payload, you can relace this with custom icon you put in mipmap
      big_text: "Show when notification is expanded",     // Android only
      sub_text: "This is a subText",                      // Android only
      color: "red",                                       // Android only
      vibrate: 300,                                       // Android only default: 300, no vibration if you pass 0
      wake_screen: true,                                  // Android only, wake up screen when notification arrives
      group: "group",                                     // Android only
      picture: "https://google.png",                      // Android only bigPicture style
      ongoing: true,                                      // Android only
      my_custom_data:'my_custom_field_value',             // extra data you want to throw
      lights: true,                                       // Android only, LED blinking (default false)
      show_in_foreground: true                           // notification when app is in foregrou
    });
  }
  
  componentWillUnmount() {
    this.notificationListner.remove();
    this.refreshTokenListener.remove();
  }
  
  
  render() {
    return null;
  }
}
