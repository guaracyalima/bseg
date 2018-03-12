import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  cardBoxOfInsurance: {
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 5,
    marginLeft: 7,
    marginRight: 10,
    height: 145,
    borderColor: '#000',
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  container: {
    marginTop: 15,
  },
  iconOfInsurance: {
    width: 50,
    height: 50,
  },
  textOfNameOfInsurance: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
  },
  headerOfInsuranceCardBox: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containerOfInsuranceCardBoxMoreInformations: {
    backgroundColor: 'transparent',
  },
  rowOfButtons: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  borderGreenOfButton: {
    borderColor: '#8ad57b',
    borderWidth: 2,
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
  },
  textOfButtonInCircleGreen: {
    fontSize: 10,
    color: '#000',
    fontWeight: '500',
    // marginTop: 25,
    textAlign: 'center',
    // paddingRight: 5,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
  },
  foto: {
    width: 102,
    height: 102,
  },
  detalhesItem: {
    marginLeft: 20,
    flex: 1,
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detalhes: {
    fontSize: 16,
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttomItem: {
    fontSize: 10,
    color: '#000',
  },
  viewOfInitialsDetailsOfInsurance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  itemOfInitialDetailOfInsurance: {
    fontSize: 14,
    color: 'blue',
  },
  coverages: {
    marginTop: 25,
    flex: 1,
  },
  titlesOfDetailsOfInsurance: {
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 20,
    marginBottom: 3,
    marginTop: 10,
  },
  btCloseModalOfDetailInsurance: {
    borderWidth: 2,
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#000',
  },
  viewOfCoveragesFor: {
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
  },
});

export default css;
