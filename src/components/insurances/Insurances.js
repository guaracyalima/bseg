import React, { Component } from 'react';
import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import css from '../../styles/main-styles';
import { api } from '../../../env';

const insurances = require('../../../assets/img/icons/icon_seguros.png');
const notification = require('../../../assets/img/icons/icon_notificacoes.png');
const mail = require('../../../assets/img/icons/icon_mensagens.png');
const brasal = require('../../../assets/img/icons/icon_brasal.png');
const attendiment = require('../../../assets/img/icons/icon_atendimento.png');
const friend = require('../../../assets/img/icons/icon_indicacao.png');

export default class Insurances extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', emial: '', cpf: '' };
  }

  async getToken() {
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    let options = { headers: { Authorization: `Bearer ${value}` } };
    await axios.get(`${api.apiUrl}/user`, options)
      .then((res) => {
        this.setState({ name: res.data.name, email: res.data.email, cpf: res.data.cpf });
      })
      .catch(error => console.log('erro ao trazer dados do usuario logado', error));
  }

  componentWillMount() {
    setTimeout(() => {
      this.getToken();
    }, 1200);
  }

  render() {
    return (
      <ScrollView style={css.main}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={css.featured}>
          <Text style={css.wellcomeClient}>Bem vindo, {this.state.name}</Text>
          <View style={css.list_food}>
            <View style={css.list_food_item}>
              <View>
                <TouchableOpacity onPress={() => { Actions.myinsurances({ cpf: this.state.cpf }); }}>
                  <Image source={insurances} style={css.list_food_item_image} />
                </TouchableOpacity>
                <Text style={css.textOfDescriptionOfImage} >Seguros</Text>
              </View>

              <View>
                <TouchableOpacity onPress={() => { Actions.notifications({ cpf: this.state.cpf }); }}>
                  <Image source={notification} style={css.list_food_item_image} />
                </TouchableOpacity>
                <Text style={css.textOfDescriptionOfImage} >Notificações</Text>
              </View>

              <View>
                <TouchableOpacity onPress={() => { Actions.messages({ cpf: this.state.cpf }); }}>
                  <Image source={mail} style={css.list_food_item_image} />
                </TouchableOpacity>
                <Text style={css.textOfDescriptionOfImage} >Mensagens</Text>
              </View>
            </View>

            <View style={css.list_food_item}>

              <View>
                <TouchableOpacity onPress={() => { Actions.broker(); }}>
                  <Image source={brasal} style={css.list_food_item_image} />
                </TouchableOpacity>
                <Text style={css.textOfDescriptionOfImage} >Brasal</Text>
              </View>


              <View>
                <TouchableOpacity onPress={() => { Actions.attendance(); }}>
                  <Image source={attendiment} style={css.list_food_item_image} />
                </TouchableOpacity>
                <Text style={css.textOfDescriptionOfImage} >Atendimento</Text>
              </View>


              <View>
                <TouchableOpacity onPress={() => { Actions.snack(); }}>
                  <Image source={friend} style={css.list_food_item_image} />
                </TouchableOpacity>
                <Text style={css.textOfDescriptionOfImage} >Indicar amigo</Text>
              </View>

            </View>
          </View>

          <TouchableOpacity style={css.button} underlayColor="#328fe6" onPress={this.auth}>
            <Text style={css.label}>MINHA PROXIMA FATURA</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}
