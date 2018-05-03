import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import FoldView from 'react-native-foldview';

import ProfileDetailCard from './ProfileDetailCard';
import AdditionalInfoCard from './AdditionalInfoCard';

// essa classe se vira pra renderizar os details

export default class Row extends Component {
  componentWillMount() {
    this.renderBackface = this.renderBackface.bind(this);
    this.renderInnerBackFace = this.renderInnerBackFace.bind(this);
  }

  renderBlankFace() {
    return (
      <View
        style={{
          backgroundColor: '#D6EFFF', // cor de fundo da abertura do card
          flex: 1,
        }}
      />
    );
  }

  renderBackface() {
    const onPress = this.props.onPress;
    return (
      <View style={{ flex: 1 }}>

        <FoldView
          renderFrontface={this.renderBlankFace}
          renderBackface={this.renderInnerBackFace}
        >
          <AdditionalInfoCard onPress={onPress} bk={this.props} />
        </FoldView>

      </View>
    );
  }

  renderInnerBackFace() {
    const onPress = this.props.onPress;
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: '#BDC2C9', // cor da linha acima do botao de fechar
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
        }}
      >
        <View
          style={{
            backgroundColor: '#8ad57b',
            flex: 1,
            margin: 14,
            borderRadius: 2,
          }}
        >
          <TouchableHighlight
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onPress}
          >
            <Text style={{
              width: 230,
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '600',
              color: '#111f00',
            }}>
              FECHAR
            </Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }

  render() {
    const onPress = this.props.onPress;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          flexDirection: 'column',
        }}
      >

        <View style={{ flex: 1 }} >

          <View
            style={{
              flex: 1,
              paddingBottom: 10,
              padding: 16,
            }}
          >

            <Text style={{ textAlign: 'center' }}>Seguros</Text>

            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text>Vida</Text>
                <Text>Automóvel</Text>
                <Text>Saúde</Text>
                <Text>Odontológico</Text>
              </View>

            </View>

          </View>

          {/* renderiza a view de detalhes com botao fechar */}
          <View style={{ flex: 1 }}>

            <FoldView
              renderFrontface={this.renderBlankFace}
              renderBackface={this.renderBackface}
            >
              <ProfileDetailCard onPress={onPress} />
            </FoldView>

          </View>

        </View>

      </View>
    );
  }
}
