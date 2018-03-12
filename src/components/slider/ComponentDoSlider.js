import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, TouchableHighlight, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
// import { sliderWidth, itemWidth } from 'example/src/styles/SliderEntry.style';
import { sliderWidth, itemWidth } from '../../styles/SliderEntry.style';
// import SliderEntry from 'example/src/components/SliderEntry';
import SliderEntry from './SliderEntry';
// import styles, { colors } from 'example/src/styles/index.style';
import styles, { colors } from '../../styles/index.style';
// import { ENTRIES1, ENTRIES2 } from 'example/src/static/entries';
import { ENTRIES1, ENTRIES2 } from '../../mok/static';
// import { scrollInterpolators, animatedStyles } from 'example/src/utils/animations';
import { scrollInterpolators, animatedStyles } from '../../animations/animations';

//modals
import Modal from "react-native-modal";

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export default class ComponentDoSlider extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    _renderLightItem ({item, index}) {
        return <SliderEntry data={item} even={false} />;
    }

    _renderDarkItem ({item, index}) {
        return <SliderEntry data={item} even={true} />;
    }

    layoutExample (number, title, type) {
        const isTinder = type === 'tinder';
        return (
            <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                {/* <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>{`Minhas apolices ${number}`}</Text> */}
                {/* <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>{title}</Text> */}
                <Carousel
                  data={isTinder ? ENTRIES2 : ENTRIES1}
                  renderItem={isTinder ? this._renderLightItem : this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  layout={type}
                  loop={true}s></Carousel>
                  <Text style={[styles.insurerName]}>{`Seguro Auto`}</Text>
                  <Text style={[styles.descriptionOfInsurance]}>{`Nada melhor do que dirigir protejido`}</Text>

                  <View style={ styles.rowOfButtons} >
                    
                    <View style={ styles.borderGreenOfButton }>
                        <Text style={ styles.textOfButtonInCircleGreen }>
                            Apolice
                        </Text>
                    </View>

                    <View style={ styles.borderGreenOfButton }>
                        <Text style={ styles.textOfButtonInCircleGreen }>
                            Faturas
                        </Text>
                    </View>

                    <View style={ styles.borderGreenOfButton }>
                    <TouchableHighlight onPress={this._toggleModal} >
                        <Text style={ styles.textOfButtonInCircleGreen }>
                                Cobertura
                            </Text>
                    </TouchableHighlight>
                       
                    </View>

                    
                    <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
                  </View>
            </View>
        );
    }

    state = {
        isModalVisible: false
      };
    
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    render () {
        const componentRender = this.layoutExample(4, '"" ', 'tinder');
        return (
            // <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >
                        { componentRender }
                     
                    </ScrollView>
                </View>
            // </SafeAreaView>
        );
    }
}
