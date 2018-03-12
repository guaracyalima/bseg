/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  Modal,
  TouchableHighlight,
  ScrollView,

} from 'react-native';
import css from '../../styles/MyInsurances-style';

const car = require('../../../assets/img/icons/sports-car.png');

export default class BrokerItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={css.container}>
        <View style={css.cardBoxOfInsurance}>

          <View style={css.item}>
            <View style={css.headerOfInsuranceCardBox}>

              <Image source={{ uri: this.props.item.image }} style={css.iconOfInsurance} />

              <Text style={css.textOfNameOfInsurance}>
                {this.props.item.name}
              </Text>

            </View>
          </View>
          <View style={css.viewOfCoveragesFor} >
            <Text>{this.props.item.departament.description}</Text>
            <Text>{this.props.item.departament.telephone}</Text>
            <Text>{this.props.item.departament.email}</Text>
            <Text>{this.props.item.departament.whatsapp}</Text>
          </View>
        </View>

      </View>


    );
  }
}

