import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, AsyncStorage, Alert} from 'react-native';
import axios from 'axios';
import { api } from '../../../env';
import css from "../../styles/Friendly.style";

export default class Friendly extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', phone: '', email: '', message: '' };
    this.__indicateFriendly = this.__indicateFriendly.bind(this);
  }
  
  async __indicateFriendly(){
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    await axios.post(`${api.apiUrl}/invite`, {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
      i: 'Mariana Gomas'
    },  { headers: { Authorization: `Bearer ${value}` } })
      .then( res => {
        console.log('amigo indicado com sucesso!')
        this.setState({name: '', phone: '', email: '', message: ''})
      })
      .catch( error => console.log('erro ao indicar amigo'))
  }
  render() {
    return (
      <View style={css.container}>
        <View style={css.logo}>
          <Text style={css.descriptionOfView}>Indique um amigo</Text>
        </View>
        
        <View style={css.formContainer}>
          <TextInput
            style={css.input}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder="Nome"
            multiline={false}
            placeholderTextColor="#fff"
          />
  
          <TextInput
            style={css.input}
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            placeholder="Telefone"
            maxLength={12}
            multiline={false}
            placeholderTextColor="#fff"
          />
          
          <TextInput
            style={css.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="E-mail"
            multiline={false}
            placeholderTextColor="#fff"
          />
          
  
          <TouchableOpacity style={css.button} underlayColor="#328fe6" onPress={this.__indicateFriendly}>
            <Text style={css.label}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
