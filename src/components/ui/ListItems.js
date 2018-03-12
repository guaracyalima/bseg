import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import axios from 'axios'
import Items from './Items'

export default class ListItems extends Component {

  constructor(props){
    super(props)
    this.state = { listaItems: [] }
  }

  componentWillMount(){
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then( response => { this.setState({ listaItems: response.data }) })
      .catch( (err) => console.log('erro ao trazer dados', err))
  }
  render() {
    return (
      <ScrollView style={ css.view }>
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </ScrollView>
    );
  }
}
// { this.state.listaItems.map(  item  => (<Items key={ item.titulo } item={ item }/>) ) }
const css = StyleSheet.create({
  view: {
    backgroundColor: '#ddd',
    paddingTop: 10
  }
})
