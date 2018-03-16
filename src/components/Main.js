import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import Toaster, { ToastStyles } from 'react-native-toaster'

//componets
import Insurances from '../components/insurances/Insurances'

export default class Main extends Component{

  render(){

    return(
        <Insurances />
    )
  }
}
