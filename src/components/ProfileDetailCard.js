import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  ThinGrayLine,
  ThickGrayLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#BDC2C9',
  },
});

export default ({ onPress }) => (
  <View style={styles.container}>
    <View style={{ flex: 1 }}>
      <Text>Other detail</Text>
      <Text>Other tretail</Text>
      {/*<ThickGrayLine width={60} />*/}
      {/*<ThinGrayLine width={120} />*/}
    </View>
    
    <View style={{ flex: 1 }}>
      <Text>Detalhe largao</Text>
      <Text>Lorem ipsun</Text>
      {/*<ThickGrayLine width={60} onPress={onPress} />*/}
      {/*<ThinGrayLine width={120} />*/}
    </View>
  </View>
);
