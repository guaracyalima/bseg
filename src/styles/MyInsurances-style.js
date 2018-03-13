import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  cardBoxOfInsurance: {
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 20,
    marginLeft: 40,
    marginRight: 40,
    borderColor: '#000',
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 1},
    flex: 1,
  },
  container: {
    marginTop: 15,
  },
  iconOfInsurance: {
    width: 50,
    height: 50,
  },
  textOfNameOfInsurance: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    color: '#B6BAB5',
    backgroundColor: 'transparent',
    fontFamily: 'arial',
    fontWeight: '600',
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
  insurerMinimalInformations: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#00645D',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 50,
    marginRight: 50,
  },
  assetsAndInsurerInformations: {
    marginTop: 1,
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontWeight: '600',
    fontFamily: 'arial',
    color: '#B6BAB5',
  },
  viewOfApoliceNumberAnDates: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  merosMortais: {
    fontWeight: '300',
    color: '#858b84',
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
