import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import css from '../../styles/message.styles';

export default class NotificationItem extends Component {
  constructor(props) {
    super(props)
    console.log('props la na messageitem', props)
  }
  
 
  render() {
    return (
      <View style={css.messages} >
        <View>
          <Icon
            name="alarm"
          />
        </View>
        <View style={css.messageHeader}>
          <Text style={css.titleOfNotification}>asdfasdfsda</Text>
        </View>
        <View>
          <Text style={css.shortDescription}>dsfgdfg</Text>
          <Text style={css.created_at}>sdfsfgsad</Text>
        </View>
      </View>
    );
  }
}
