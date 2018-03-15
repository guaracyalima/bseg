import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import { ThickWhiteLine } from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33373B', // define o background do card inicial apos abertura
    padding: 10,
    flexDirection: 'column',
    marginTop: 80,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
  },
  emailAndPhone: {
    fontSize: 13,
  },
});


export default ({ onPress }) => (
  <View style={styles.container}>
    {/* renderiza o topo do card quando se abre */}
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#5A4A9C',
        height: 40,
        padding: 10,
      }}
    >
      <ThickWhiteLine width={40} onPress={onPress} />
      <Text>{this.props}</Text>
    </View>

    <View style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          paddingBottom: 0,
        }}
      >
        <Text style={styles.emailAndPhone}>(61) 3962.6655</Text>
        <Text style={styles.emailAndPhone}>brasalcorretora@brasal.com.br</Text>
      </View>
    </View>

  </View>
);

