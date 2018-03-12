import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  ThinGrayLine,
  ThickGrayLine,
  ThickDarkGrayLine,
  ThinRedLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#fff', //define background do card inicial
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
      <Text>0000007</Text>
      {/*<ThickGrayLine />*/}
      
      <View>
        <ThinRedLine onPress={onPress} />
        {/*<ThickGrayLine width={80} />*/}
        <Text>Lorem ipsun</Text>
      </View>
    </View>
    
    <View style={styles.rightPane}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text>Brasal Corretora</Text>
        <Text>Brasal Corretora</Text>
        {/*<ThickGrayLine width={140} />*/}
        {/*<ThickGrayLine width={160} />*/}
      </View>
      
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <ThinGrayLine width={60} />
          <ThickDarkGrayLine width={60} />
        </View>
        
        <View style={{ flex: 1 }}>
          <ThinGrayLine width={60} />
          <ThickDarkGrayLine width={60} />
        </View>
      </View>
    </View>
  
  </View>
);
