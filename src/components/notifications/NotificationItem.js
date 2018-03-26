import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import css from '../../styles/message.styles';

export default class NotificationItem extends Component {
  constructor(props) {
    super(props)
    this.state = {notifications: props.notification}
  }
  
  __renderMessage(){
    const { notification } = this.props
    if (notification !== 0) {
      return (
        notification.map( i => (
          <View style={css.messages} key={i.id}>
            <View>
              <Icon
                name="alarm"
              />
            </View>
            <View style={css.messageHeader}>
              <Text style={css.titleOfNotification}>{i.user_id}</Text>
            </View>
            <View>
              <Text style={css.shortDescription}>{i.message}</Text>
              <Text style={css.created_at}>{i.created_at}</Text>
            </View>
          </View>
          )
        
        )
      )
    }
    return false;
  }
  
 
  render() {
    return (
      <View >
        {this.__renderMessage()}
      </View>
    );
  }
}
