import React, { Component } from 'react';
import { ScrollView, StyleSheet, StatusBar, View, Text } from 'react-native';
import axios from 'axios';
import AutoInsuranceItem from './AutoInsuranceItem';
import EOInsurances from './EOInsurances';
import ResidentialInsurance from './Residential';
import LifeInsurance from './Life';
import LeaseBoundInsurance from './LeaseBound';

class MyInsurances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auto: [],
      eo: [],
      life: [],
      lease: [],
      residential: [],
    };
  }

  componentWillMount() {
    axios.get('http://127.0.0.1:8000/api/insured/1')
      .then((response) => {
        this.setState({ auto: response.data.auto });
        this.setState({ eo: response.data.eo });
        this.setState({ life: response.data.life });
        this.setState({ lease: response.data.lease });
        this.setState({ residential: response.data.residential });
        console.log('state mysql', this.state)
      })
      .catch(err => console.log('erro ao trazer dados', err));
  }

  __renderBlockOfAutoInsurance() {
    const { auto } = this.state;
    if (auto.length !== 0) {
      return (
        auto.map(item => (<AutoInsuranceItem key={item.id} item={item} coverage={item.coverage} />))
      );
    }
    return false;
  }
  __renderBlockOfEOInsurance() {
    const { eo } = this.state;
    console.log('a pora do EO', eo)
    if (eo.length !== 0) {
      return (
        eo.map(item => (<EOInsurances key={item.id} item={item} coverage={item.coverage} />))
      );
    }
    return false;
  }
  __renderBlockOfResidentialInsurance() {
    const { residential } = this.state;
    if (residential.length !== 0) {
      return (
        residential.map(item => (<ResidentialInsurance key={item.id} item={item} coverage={item.coverage} />))
      );
    }
    return false;
  }
  __renderBlockOfLifeInsurance() {
    const { life } = this.state;
    if (life.length !== 0) {
      return (
        life.map(item => (<LifeInsurance key={item.id} item={item} coverage={item.coverage} />))
      );
    }
    return false;
  }
  __renderBlockOfLeaseBoundInsurance() {
    const { lease } = this.state;
    if (lease.length !== 0) {
      return (
        lease.map(item => (
          <LeaseBoundInsurance
            key={item.id}
            item={item}
            coverage={item.coverage}
          />))
      );
    }
    return false;
  }

  render() {
    return (


      <ScrollView style={css.main}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={css.viewOfRenderItemsInContextBox}>
          {this.__renderBlockOfAutoInsurance()}
          {this.__renderBlockOfEOInsurance()}
          {this.__renderBlockOfResidentialInsurance()}
          {this.__renderBlockOfLifeInsurance()}
          {this.__renderBlockOfLeaseBoundInsurance()}
        </View>
      </ScrollView>

    );
  }
}

const css = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#005c5b',
  },
  viewOfRenderItemsInContextBox: {
    marginTop: 55,
  },
});

export default MyInsurances;
