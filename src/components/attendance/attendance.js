import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { GiftedChat } from 'react-native-gifted-chat'

//styles
import css from '../../styles/insuser-style'

const logo = require('../../../assets/img/logo/logo.png')

export default class Attendance extends Component {
    state = {
        messages: [],
      }
    
      componentWillMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://facebook.github.io/react/img/logo_og.png',
              },
            },
          ],
        })
      }
    
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
    
  render() {

    return (
        <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}
