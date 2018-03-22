import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default class AdditionalInfoCard extends Component {
  constructor(props) {
    super(props);
    console.log('props no additiona info card', this.props);
  }
  
  _renderDepartaments = this.props.bk.bk.bk.departament.map( (dp) =>  {
    return(
      <View key={dp.id}>
        <Text>{dp.description}</Text>
          <View style={css.telefoneWp}>
            <Text>{dp.telephone}</Text>
            <Text>{dp.whatsapp}</Text>
          </View>
        <Text>{dp.email}</Text>
        
      </View>
    );
  });
  render() {
    const onPress = this.props.onPress;
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 10,
          paddingHorizontal: 16,
          flexDirection: 'row',
          backgroundColor: '#FFFFFF', // define a cor de fundo da seção
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: '#BDC2C9',
        }}
      >
       

        <View style={{ flex: 1 }}>
          {this._renderDepartaments}
        </View>
      </View>
    );
  }
}

const css = StyleSheet.create({
  telefoneWp: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  }
});
