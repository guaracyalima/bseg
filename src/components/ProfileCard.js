import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import FoldView from 'react-native-foldview';

import ProfileDetailCard from './ProfileDetailCard';
import AdditionalInfoCard from './AdditionalInfoCard';

import {
  ThinGrayLine,
  ThickDarkGrayLine,
} from './Lines';


//essa classe se vira pra renderizar os details

export default class Row extends Component {
  
  componentWillMount() {
    this.renderBackface = this.renderBackface.bind(this);
    this.renderInnerBackFace = this.renderInnerBackFace.bind(this);
  }
  
  renderBlankFace() {
    return (
      <View
        style={{
          backgroundColor: '#D6EFFF', //cor de fundo da abertura do card
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
          <AdditionalInfoCard onPress={onPress} />
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
          borderTopColor: '#BDC2C9', //cor da linha acima do botao de fechar
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
        }}
      >
        <View
          style={{
            backgroundColor: '#FFBD18',
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
            <Text>
              Fechar
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
            
            <Text>All details of insurance</Text>
            {/*<ThinGrayLine width={120} />*/}
            
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}
            >
              
              <TouchableHighlight
                onPress={onPress}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 10,
                    backgroundColor: '#BDC2C9',
                  }}
                />
              </TouchableHighlight>
              
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                }}
              >
                <Text>DeadFish</Text>
                {/*<ThickDarkGrayLine width={200} />*/}
                <ThinGrayLine width={120} />
              </View>
            
            </View>
          
          </View>
          
          {/*renderiza a view de detalhes com botao fechar*/}
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
