import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import {
  ThinGrayLine,
  ThickGrayLine,
  ThickDarkGrayLine,
  ThinRedLine,
} from './Lines';
const logo = require('../../assets/img/logo/_.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 50,
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#fff', // define background do card inicial
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightPane: {
    flex: 2,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default ({ onPress }) => (
  <View style={styles.container}>
    <View style={styles.leftPane}>
      <Image source={logo} />
      <View>
        <ThinRedLine onPress={onPress} />
        <Text />
      </View>
    </View>

    <View style={styles.rightPane}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        {/*<Text>Seguros</Text>*/}
        <Text>Brasal Corretora</Text>
      </View>

      {/*<View style={{ flexDirection: 'row' }}>*/}
        {/*<View style={{ flex: 1 }}>*/}
          {/*<ThinGrayLine width={60} />*/}
          {/*<ThickDarkGrayLine width={60} />*/}
        {/*</View>*/}
      
        {/*<View style={{ flex: 1 }}>*/}
          {/*<ThinGrayLine width={60} />*/}
          {/*<ThickDarkGrayLine width={60} />*/}
        {/*</View>*/}
      {/*</View>*/}
    </View>

  </View>
);
