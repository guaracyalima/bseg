/* eslint-disable react/jsx-filename-extension */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  
} from 'react-native';
import Modal from "react-native-modal";
import css from '../../styles/MyInsurances-style';

const HOUSE = require('../../../assets/img/icons/home_gray.png');
import axios from 'axios';
import styles from "../app.style";
import {api} from "../../../env";

export default class ResidentialInsurance extends Component {
  state = {
    modalVisible: false,
    visibleModal: null
  };
  listCoverage = this.props.item.coverage.map((c) => {
    return (
      <View style={css.viewOfCoveragesFor} key={c.id}>
        <Text>{c.coverage}</Text>
        <Text>Valor: {c.value}</Text>
        <Text>Franquia: {c.franchise}</Text>
      </View>
    )
  });
  
  constructor(props) {
    super(props);
    console.log('residential', this.props)
  }
  
  toggleModal(visible) {
    this.setState({modalVisible: visible})
  }
  
  show(id) {
    axios.get(`${api.apiUrl}/api/auto/${id}`)
      .then((response) => {
        this.setState({
          insurance: response.data,
          coverage: response.data.coverage
        });
        console.log('Insurrance show', this.state);
      })
      .catch(err => console.log('erro ao trazer dados', err));
  }
  
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  
  _renderModalContent = () => (
    <View style={styles.modalContent}>
  
      <ScrollView>
        <Text style={css.titlesOfDetailsOfInsurance}>Seguradora</Text>
        <Text>Seguradora: {this.props.item.insurer}</Text>
        <Text>Central de atendimento: {this.props.item.insurer}</Text>
        
        <Text style={css.titlesOfDetailsOfInsurance}>Bem</Text>
        <Text>Cidade: {this.props.item.city}</Text>
        <Text>Bairro: {this.props.item.neigbrhood}</Text>
        <Text>CEP: {this.props.item.neigbrhood}</Text>
        
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
      </ScrollView>
      {this._renderButton("FECHAR", () => this.setState({ visibleModal: null }))}
    </View>
  );
  
  __renderAutoInsurance = () => (
    <View style={css.cardBoxOfInsurance}>
      
      <View style={css.nameAndIconOfInsurance}>
        <Image source={HOUSE} style={css.iconOfInsurance}/>
        <Text style={css.textOfNameOfInsurance}>
          Seguro Residencial
        </Text>
      </View>
      
      <View style={css.insurerMinimalInformations}>
        <Text style={css.assetsAndInsurerInformations}>
          Endereço: {this.props.item.neigbrhood}, {this.props.item.city}
        </Text>
        <Text style={css.assetsAndInsurerInformations}>
          CEP: {this.props.item.cep}
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
            this.show(this.props.item.id), this.setState({ visibleModal: 7 }) //this.toggleModal(true)
          }}/>
      </View>
    </View>
  );
  
  
  
  
  render() {
    return (
      <View style={css.container}>
        {this.__renderAutoInsurance()}
        <Modal
          isVisible={this.state.visibleModal === 7}>
          <ScrollView>
            {this._renderModalContent()}
          </ScrollView>
        </Modal>
      </View>
    
    
    );
  }
}

