import React, { Component } from 'react';
import MessageItem from './MessageItem';
import { ScrollView, AsyncStorage, TextInput } from 'react-native';
import {View, Assets, Constants, Card, Button, Colors, Typography, Text, TextArea} from 'react-native-ui-lib';

import css from '../../styles/message.styles';
import axios from 'axios/index';
import { api } from '../../../env';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = { client: [],  phone: '', message: '', subject: '', attachmet: '', user_id: ''};
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
          <Card
            row // control the children flow direction
            borderRadius={12}
            height={150}
            containerStyle={{marginRight: 20, marginLeft: 20}}
            onPress={false}
            enableShadow={true/false}>
            <Text>XPTO</Text>
          </Card>
  
          <TextInput
            style={css.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Telefone de contato"
            multiline={false}
            placeholderTextColor="#fff"
          />
  
          <TextInput
            style={css.input}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Assunto"
            secureTextEntry
            maxLength={12}
            multiline={false}
            placeholderTextColor="#fff"
          />
  
          <View
            style={{
              height: 100,
              borderWidth: 1,
              marginBottom: 5,
              padding: 10,
              borderColor: '#fff',
              borderRadius: 25,
              backgroundColor: 'transparent',
              width: 320,
              marginRight: 15,
              marginLeft: 25,
            }}>
            <TextArea placeholder="Escreva sua mensagem" />
          </View>
        </View>
      </ScrollView>
    );
  }
}
