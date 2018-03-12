import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

const eat = require('../../../assets/img/hamburguer.png');
export default class Items extends Component {
  render() {
    return (
      <View style={ estilos.item }>
          <View style={ estilos.foto }>
            <Image source={ eat } style={{ height: 100, width: 100}}></Image>
          </View>
          <View style={ estilos.detalhesItem }>
            <Text style={ estilos.titulo }>Hamburguer de mocotó</Text>
            <Text style={ estilos.valor }>R$ 88,88</Text>
            <Text style={ estilos.detalhes }>5 min</Text>
            <Text>5 stars</Text>
          </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 70
  },
  foto: {
    width: 102,
    height: 102
  },
  detalhesItem: {
    marginLeft: 20,
    flex: 1
  },
  titulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  detalhes: {
    fontSize: 16
  }
})
