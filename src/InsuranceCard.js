import React from 'react';

import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Row from './Row';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#005c5b', //define a cor do background do container main
    flex: 1,
    padding: 10,
    paddingTop: STATUSBAR_HEIGHT,
  },
});

export default () => (
  <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
    />
    <ScrollView
      style={styles.scrollView}
    >
      <Row zIndex={100} />
    </ScrollView>
  </View>
);
