import React, { Component } from 'react';
import { Alert, Image } from 'react-native'
import AppIntro from 'react-native-app-intro';
import { Actions } from 'react-native-router-flux';

//import images
const female = require('../../assets/img/bg/login/login.jpg')
export default class Intro extends Component {
  onSkipBtnHandle = (index) => {
    Actions.login();
    // Alert.alert('Pulou a intro');
    // console.log(index);
  }
  doneBtnHandle = () => {
    Actions.login();
  }
  nextBtnHandle = (index) => {
    Alert.alert('Promxima pagina');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  render() {
    const pageArray = [{
      title: 'Brasal Seguradora',
      description: 'The galitc slogan',
      img: female,
      // imgStyle: {
      //   height: 80 * 2.5,
      //   width: 109 * 2.5,
      // },
      backgroundColor: 'transparent',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Page 2',
      description: 'Description 2',
      img: 'https://goo.gl/Bnc3XP',
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: 'transparent',
      fontColor: '#fff',
      level: 10,
    }];
    return (
      
      <Image source={female}>
        <AppIntro
          onNextBtnClick={this.nextBtnHandle}
          onDoneBtnClick={this.doneBtnHandle}
          onSkipBtnClick={this.onSkipBtnHandle}
          onSlideChange={this.onSlideChangeHandle}
          pageArray={pageArray}
        />
      </Image>
    );
  }
}
