import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, View, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { height, width } = Dimensions.get('window');

const images = [
    // '../../../assets/img/featured.jpg',
    'https://unsplash.it/350/?random',
    'https://unsplash.it/400/?random',
    'https://unsplash.it/450/?random',
    'https://unsplash.it/500/?random',
    'https://unsplash.it/550/?random',
    'https://unsplash.it/600/?random'
];


//styles 
import css from '../../styles/MyInsurances-style'

class OLD_MyInsurances extends Component {
    renderItem = ({ item, index }) => {
        return (
            <Image source={{ uri: item }} style={ styles.logoStyle }/>
        );
    };

    get pagination () {
      const activeSlide = 1;
        return (
            <Pagination
              dotsLength={ images.length }
              activeDotIndex={ activeSlide }
              containerStyle={{ background: 'transparent' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: '#000'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }   

    render () {
        return (
            <View style={ css.container }>
                <View style={ css.fuckmain }>
                <View style={ css.content_of_slider }>
                    <Carousel
                                data={ images }
                                renderItem={this.renderItem}
                                sliderWidth={width}
                                itemWidth={width}
                                layout={'tinder'} 
                                layoutCardOffset={`18`}
                                onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    />
                    { this.pagination }

                    <Text>Teste de texto do card</Text>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoStyle: {
        width: width,
        height: width,
        paddingRight: 45,
    }
});

export default MyInsurances;
