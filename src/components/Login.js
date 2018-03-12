import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image } from 'react-native'

import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import Toaster, { ToastStyles } from 'react-native-toaster'

//import Styles
import css from '../styles/login-styles'

const logo = require('../../assets/img/logo/logo.png');
const bg = require('../../assets/img/bg/login/login.jpg')

//environiment 
import { dev } from '../../env'
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '', loaded: true, message: null }
    this.auth = this.auth.bind(this)
  }

  componentWillMount() {
    firebase.initializeApp(dev);
  }
  0
  auth() {
    let email = "guaracyaraujolima@gmail.com"
    let senha = "123456"
    const usuario = firebase.auth()
    usuario.signInWithEmailAndPassword(email, senha)
      .then((res) => {
        // console.log( Actions );
        Actions.main()
        alert('Bem vindo á Brasal Corretora')
      })
      .catch((error) => {
        let code = error.code
        let message = error.message
        alert(`Houve um erro ao logar-se ${message}`)
      })
  }

  render() {

    return (
      <Image source={bg} style={css.bg}>
        <View style={css.loginCotainer}>

          <View style={css.logo}>
            <Image source={logo} style={css.logoImage} />
          </View>


          <TextInput
            style={css.input}
            value={this.state.username}
            onChangeText={(username) => this.setState({ username: username })}
            placeholder={'Usuario'}
            multiline={false}
            placeholderTextColor="#fff" />

          <TextInput
            style={css.input}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password: password })}
            placeholder={'Senha'}
            secureTextEntry={true}
            maxLength={12}
            multiline={false}
            placeholderTextColor="#fff" />



          <Toaster message={this.state.message} />
          <TouchableHighlight style={css.button} underlayColor={'#328fe6'} onPress={this.auth}>
            <Text style={css.label}>ETRAR</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => Actions.signup()}>
            <Text style={css.signup}> Ainda não possui cadastro? registre-se</Text>
          </TouchableHighlight>
        </View>
        {/* </View> */}
      </Image>
    )
  }
}
