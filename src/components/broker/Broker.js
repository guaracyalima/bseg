import React, { Component } from 'react';
import { ScrollView, StyleSheet, StatusBar, View, AsyncStorage } from 'react-native';
import axios from 'axios';
import BrokerItems from './BrokerItem';

class Broker extends Component {
  constructor(props) {
    super(props);
    this.state = { listaItems: [] };
  }

  async componentWillMount() {
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    axios.get('http://127.0.0.1:8000/api/broker', { headers: { Authorization: `Bearer ${value}` } })
      .then((response) => {
        this.setState({ listaItems: response.data });
        console.log('itmes in the list', this.state.listaItems)
      })
      .catch(err => console.log('erro ao trazer dados', err));
  }

  render() {
    return (
      <ScrollView style={css.main}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={css.viewOfRenderItemsInContextBox}>
          { this.state.listaItems.map(item => (<BrokerItems key={item.id} item={item} />)) }
        </View>
      </ScrollView>
    );
  }
}

const css = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#005c5b',
  },
  viewOfRenderItemsInContextBox: {
    marginTop: 55,
  },
});

export default Broker;
