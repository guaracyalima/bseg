import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 26,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#BDC2C9',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ({ onPress }) => (
  <View style={styles.container}>
    <View style={{ flex: 1 }}>
      <Text>Agropecuario</Text>
      <Text>Empresarial</Text>
      <Text>E&O</Text>
      <Text>Aeronáutico</Text>
    </View>

    <View style={{ flex: 1}}>
      <Text>Previdência</Text>
      <Text>Residencial</Text>
      <Text>Fiança Locatícia</Text>
      <Text>Marítimo</Text>
    </View>
  </View>
);
