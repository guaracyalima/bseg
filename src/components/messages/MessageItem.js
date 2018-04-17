import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import css from '../../styles/message.styles';

export default class MessageItem extends Component {
  constructor(props) {
    super(props)
    console.log('props la na messageitem', props)
  }
  
  __renderNotificationItem() {
    const { notification } = this.props
    console.log('notificationasdiugabnsfgijasdnsdfdsafsdf', notification)
    if(notification !== 0) {
      return (
        notification.map( nt => {
          <View style={css.messages} key={nt.id}>
            <View>
              <Icon
                name="alarm"
              />
            </View>
            <View style={css.messageHeader}>
              <Text style={css.titleOfNotification}>{nt.user_id}</Text>
            </View>
            <View>
              <Text style={css.shortDescription}>{nt.message}</Text>
              <Text style={css.created_at}>{nt.created_at}</Text>
            </View>
          </View>
        })
      )
    }
  }
  render() {
    return (
      <View>
        {this.__renderNotificationItem()}
      </View>
    );
  }
}
