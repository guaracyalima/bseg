import React, { Component } from 'react';

import {
  AsyncStorage,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import axios from 'axios';
import Row from './Row';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#005c5b', // define a cor do background do container main
    flex: 1,
    padding: 10,
    paddingTop: STATUSBAR_HEIGHT,
  },
});

export default class InsuranceCard extends Component {
  constructor(props) {
    super(props);
    this.state = { listBorker: [] };
  }

  async componentWillMount() {
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    axios.get('http://127.0.0.1:8000/api/broker', { headers: { Authorization: `Bearer ${value}` } })
      .then((response) => {
        this.setState({ listBorker: response.data });
        console.log('corretora no infocard', response.data);
      })
      .catch(err => console.log('erro ao trazer dados', err));
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <ScrollView
          style={styles.scrollView}
        >
          {this.state.listBorker.map((bk) => (<Row zIndex={100} key={bk.id} bk={bk} />))}
        </ScrollView>
      </View>
    );
  }
}
