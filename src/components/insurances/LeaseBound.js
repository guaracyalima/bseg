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

const LEASE = require('../../../assets/img/icons/home_gray.png');
import axios from 'axios';
import styles from "../app.style";

export default class LeaseBoundInsurance extends Component {
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
        <Text>Local de risco: {this.props.item.localeOfRisc}</Text>
        <Text>Administrador: {this.props.item.administrator}</Text>
        <Text>Duração do contrato: {this.props.item.duartion}</Text>
        
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
      {this._renderButton("FECHAR", () => this.setState({visibleModal: null}))}
    </View>
  );
  
  __renderLeaseBoundInsurance = () => (
    <View style={css.cardBoxOfInsurance}>
      
      <View style={css.nameAndIconOfInsurance}>
        <Image source={LEASE} style={css.iconOfInsurance}/>
        <Text style={css.textOfNameOfInsurance}>
          Seguro Fiança Locaticia
        </Text>
      </View>
      
      <View style={css.insurerMinimalInformations}>
        <Text style={css.assetsAndInsurerInformations}>
          Local de risco: {this.props.item.localeOfRisc}
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
            this.show(this.props.item.id), this.setState({visibleModal: 7}) //this.toggleModal(true)
          }}/>
      </View>
    </View>
  );
  
  
  render() {
    return (
      <View style={css.container}>
        {this.__renderLeaseBoundInsurance()}
        <Modal
          isVisible={this.state.visibleModal === 7}>
          {this._renderModalContent()}
        </Modal>
      </View>
    
    
    );
  }
}

