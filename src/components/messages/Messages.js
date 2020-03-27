import React, { Component } from 'react';
import MessageItem from './MessageItem';
import { ScrollView, View, Text, AsyncStorage } from 'react-native';

import css from '../../styles/message.styles';
import axios from 'axios/index';
import { api } from '../../../env';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = { client: [] };
  }

  async __client_details() {
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    await axios.get(`${api.apiUrl}/details/${this.props.cpf}`, { headers: { Authorization: `Bearer ${value}` } })
      .then((res) => {
        this.setState({ client: res.data });
        console.log('dados da trem', res.data);
      })
      .catch(error => console.log('erro ao trazer dados do usuario logado', error));
    
    console.log('esta states', this.state)
  }

  async componentWillMount() {
    await  this.__client_details();
  }

  __renderNotifications() {
    const { client } = this.state;
      if (client !== 0) {
        return (
          client.map( item => <MessageItem key={item.id} item={item} notification={item.notification}/> )
        )
      }
    return false;
  }
  render() {
    return (
      <ScrollView style={css.main}>
        <View style={css.content}>
          {this.__renderNotifications()}
        </View>
      </ScrollView>
    );
  }
}
