import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  ThinGrayLine,
  ThickDarkGrayLine,
} from './Lines';

export default ({ onPress }) => (
  <View
    style={{
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 16,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF', //define a cor de fundo da seção
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: '#BDC2C9',
    }}
  >
    <View style={{ flex: 1 }}>
      <Text>Other detail line</Text>
      {/*<ThickDarkGrayLine width={100} />*/}
      {/*<ThinGrayLine width={80} onPress={onPress} />*/}
      <Text>Other detail line</Text>
    </View>
    
    <View style={{ flex: 1 }}>
      <Text>Mais detalhes</Text>
      <Text>Mais detalhes</Text>
      {/*<ThickDarkGrayLine width={60} />*/}
      {/*<ThinGrayLine width={120} />*/}
    </View>
  
  </View>
);
