import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import {
  ThinGrayLine,
  ThickWhiteLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33373B', //define o background do card inicial apos abertura
    padding: 10,
    flexDirection: 'column',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
  },
});

export default ({ onPress }) => (
  <View style={styles.container}>
    
    {/*renderiza o topo do card quando se abre*/}
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
      {/*<ThickWhiteLine width={60} />*/}
      <Text>Insurance name</Text>
      
      <Text>123456789</Text>
      {/*<ThickWhiteLine width={40} />*/}
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
        {/*<ThinGrayLine width={40} />*/}
        <Text>Detail</Text>
        <Text>Alguma coisa aqui</Text>
        {/*<ThinGrayLine width={80} />*/}
        <Text>XPTO</Text>
        {/*<ThinGrayLine width={50} onPress={onPress} />*/}
      </View>
    </View>
  
  </View>
);
