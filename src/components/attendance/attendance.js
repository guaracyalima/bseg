import React, {Component} from 'react';
import {View, TextInput, TouchableHighlight, Button, ScrollView, AsyncStorage} from 'react-native';
import axios from 'axios';
import {GiftedChat} from 'react-native-gifted-chat';
import  Echo from 'laravel-echo';
import SocketIOClient from 'socket.io-client';
import {api} from "../../../env";

const logo = require('../../../assets/img/logo/logo.png');
export default class Attendance extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      history: '',
      name: '',
      emial: '',
      cpf: '',
      user_id: '',
      options: '',
    };
  }
  
  componentDidMount() {
    this.getToken();
    this.serverside();
  }
  
  async getToken() {
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    let options = {headers: {Authorization: `Bearer ${value}`}};
    this.setState({options: options})
    await axios.get(`${api.apiUrl}/user`, options)
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          cpf: res.data.cpf,
          user_id: res.data.id
        });
        // axios.get(`${api.apiUrl}/liveconversation/client/${this.state.user_id}`, options).then(res => {
        //     this.setState({history: res.data.historic_conversation[0].chat_messages})
        //
        //       // for (let i = 0; i < history.length; i++) {
        //       //   setTimeout(() => {
        //       //   this.setState({
        //       //     ...messages,
        //       //     messages: [{
        //       //       _id: history[i].id,
        //       //       text: history[i].message,
        //       //       createdAt: history[i].created_at,
        //       //       user: {
        //       //         _id: 666,
        //       //         name: 'Brasal ',
        //       //         avatar: 'https://webapp-bcorretora-staging.herokuapp.com/assets/img/user2-160x160.jpg',
        //       //       },
        //       //     }]})
        //       //   }, 999)
        //       //}
        //
        //
        //     // this.state.history.map( h => {
        //     //   newState = [{
        //     //     _id: h.id,
        //     //     text: h.message,
        //     //     createdAt: h.created_at,
        //     //     user: {
        //     //       _id: 666,
        //     //       name: 'Brasal ',
        //     //       avatar: 'https://webapp-bcorretora-staging.herokuapp.com/assets/img/user2-160x160.jpg',
        //     //     },
        //     //   }]
        //     //
        //     // })
        //
        //   })
        //   .catch(error => console.error('Erro ao trazer dados do historico da conversa', error))
      })
      .catch(error => console.log('erro ao trazer dados do usuario logado', error));
  }
  
  
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Bem vindo ao atendimento da Brasal Corretora',
          createdAt: new Date(),
          user: {
            _id: 666,
            name: 'Brasal ',
            avatar: 'http://brasal.com.br/templates/corporate_response/images/logo_.png',
          },
        },
      ],
    })
  }
  
  onSend(messages) {
    let dataToSend = {
      message: messages[0].text,
      client_id: this.state.user_id,
      clerck_id: 11,
      user_id: this.state.user_id,
      attachment: ''
    }
    
    axios.post(`${api.apiUrl}/liveconversation`, dataToSend, this.state.options)
      .then(res => console.log('Mensagem enviada', res))
      .catch(error => console.log('Erro ao enviar mensagem', error))
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    
    
  }
  
  refreshMessages(m){
    let message = {
      _id: m.conversation.id,
      text: m.conversation.message,
      createdAt: m.conversation.created_at,
      user: {
        _id: m.conversation.user_id,
        name: 'Brisolão',
        avatar: 'http://brasal.com.br/templates/corporate_response/images/logo_.png',
      }
    }
    console.log('o novo objeto de mensagem', message)
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, message),
    }))
  }
  
  serverside(){
    window.Echo = new Echo({
      broadcaster: 'socket.io',
      client: SocketIOClient,
      host: 'http://localhost:6001',
    });
    
    
    window.Echo.channel('chat').listen('ChatEvent', e => {
      console.log('usuario logado', this.state.user_id)
      console.log('Mensagem vinda pelo evento', e)
      if(this.state.user_id !== e.conversation.user_id){
        this.refreshMessages(e)
      }
      
    })
  }
  
  render() {
    
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        placeholder="Digite uma mensagem..."
        user={{
          _id: 1,
        }}
      />
    )
  }
}
