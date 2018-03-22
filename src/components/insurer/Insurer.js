import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

//styles
import css from '../../styles/insuser-style'

const logo = require('../../../assets/img/logo/logo.png');

export default class Insurer extends Component {

  render() {

    return (
      <ScrollView style={css.main}>
        <View style={ css.logo }>
            <Image source={ logo } style={ css.logoImage } ></Image>
        </View>
      </ScrollView>
    )
  }
}
