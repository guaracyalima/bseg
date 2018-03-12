import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

//styles
import css from '../../styles/offers-style'
const featuredImage = require('../../../assets/img/p2.jpg');
const dish = require('../../../assets/img/trecho/dish.jpg');
const omelet = require('../../../assets/img/trecho/juice.jpg');
const leve = require('../../../assets/img/trecho/salad.jpg');
const lanche = require('../../../assets/img/trecho/dessert.jpg');
export default class Offers extends Component{

  render(){

    return(
      <ScrollView style={ css.main }>
        <View style={ css.featured }>
          <Image source={ featuredImage } style={ css.featuredImage }>
            <Text style={ css.featuredText }>Açai? Temos</Text>
            <Text style={ css.textOfDescription }> Sia park hotel text</Text>
          </Image>

          <View style={ css.list_food }>
            <View style={ css.list_food_item }>

                <TouchableHighlight onPress={ Actions.brasilian_food() }>
                  <Image source={ dish } style={ css.list_food_item_image }>
                    <Text style={ css.textOfDescriptionOfImage } >Almoçu Brasileiro</Text>
                  </Image>
                </TouchableHighlight>



                <TouchableHighlight>
                  <Image source={ omelet } style={ css.list_food_item_image }>
                    <Text style={ css.textOfDescriptionOfImage } >Pressa de almoço</Text>
                  </Image>
                </TouchableHighlight>



            </View>

            <View style={ css.list_food_item }>

                <TouchableHighlight>
                  <Image source={ leve } style={ css.list_food_item_image }>
                    <Text style={ css.textOfDescriptionOfImage } >Almoço levinho</Text>
                  </Image>
                </TouchableHighlight>




                <TouchableHighlight>
                  <Image source={ lanche } style={ css.list_food_item_image }>
                    <Text style={ css.textOfDescriptionOfImage } >Almolanche</Text>
                  </Image>
                </TouchableHighlight>



            </View>
          </View>

        </View>
      </ScrollView>
    )
  }
}
