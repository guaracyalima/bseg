/* eslint-disable react/jsx-filename-extension */
import React, {Component} from 'react';
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
import axios from 'axios';

export default class Items extends Component {
  state = {
    modalVisible: false
  };
  listCoverage = this.props.item.coverage.map((c) => {
    return (
      <View style={css.viewOfCoveragesFor}>
        <Text>{c.coverage}</Text>
        <Text>Valor: {c.value}</Text>
        <Text>Franquia: {c.franchise}</Text>
      </View>
    )
  });
  
  constructor(props) {
    super(props);
    console.log('suck props', props.coverage)
  }
  
  toggleModal(visible) {
    this.setState({modalVisible: visible})
  }
  
  show(id) {
    axios.get(`http://127.0.0.1:8000/api/auto/${id}`)
      .then((response) => {
        this.setState({
          insurance: response.data,
          coverage: response.data.coverage
        });
        console.log('Insurrance show', this.state);
      })
      .catch(err => console.log('erro ao trazer dados', err));
  }
  
  render() {
    return (
      <View style={css.container}>
        <View style={css.cardBoxOfInsurance}>
          <Text style={css.textOfNameOfInsurance}>
            Seguro Automóvel
          </Text>
    
          <View style={css.insurerMinimalInformations}>
            <Text style={css.assetsAndInsurerInformations}>
              Veiculo: {this.props.item.veichle}
            </Text>
            <Text style={css.assetsAndInsurerInformations}>
              Seguradora: {this.props.item.insurer}
            </Text>
          </View>
    
          <View style={css.viewOfApoliceNumberAnDates}>
            <Text style={css.merosMortais}>
              Apolice: {this.props.item.apoliceNumber}
            </Text>
            <Text style={css.merosMortais}>
              Final da vigencia: {this.props.item.validity}
            </Text>
      
            <Button
              title="COBERTURA"
              accessibilityLabel={'Cobertura dos meus seguros'}
              color={'#B6BAB5'}
              onPress={() => {
                this.show(this.props.item.id), this.toggleModal(true)
              }}/>
          </View>
          
          
        
        </View>
  
        <Modal animationType={"slide"} transparent={false}
               visible={this.state.modalVisible}
               onRequestClose={() => {
                 console.log("Modal has been closed.")
               }}>
          <ScrollView style={css.coverages}>
            <Text style={css.titlesOfDetailsOfInsurance}>Seguradora</Text>
            <Text>Seguradora: {this.props.item.insurer}</Text>
            <Text>Central de atendimento: {this.props.item.insurer}</Text>
      
            <Text style={css.titlesOfDetailsOfInsurance}>Bem</Text>
            <Text>Veiculo segurado: {this.props.item.veichle}</Text>
            <Text>Placa: {this.props.item.board}</Text>
            <Text>Final da vigencia: {this.props.item.validity}</Text>
            <Text>Apolice: {this.props.item.apoliceNumber}</Text>
      
            <Text style={css.titlesOfDetailsOfInsurance}>Apolice</Text>
            <Text>Apolice: {this.props.item.apoliceNumber}</Text>
      
            <Text style={css.titlesOfDetailsOfInsurance}>Dados de pagamento</Text>
            <View>
              <Text>Parcela </Text>
              <Text>Vencimento </Text>
              <Text>Valor </Text>
            </View>
      
            <Text style={css.titlesOfDetailsOfInsurance}>Coberturas</Text>
            {this.listCoverage}
      
            <TouchableHighlight onPress={() => {
              this.toggleModal(!this.state.modalVisible)
            }}>
              <Text style={css.btCloseModalOfDetailInsurance}>Fechar</Text>
            </TouchableHighlight>
    
          </ScrollView>
        </Modal>
      </View>


    );
  }
}

