import {Dimensions, StyleSheet} from 'react-native';
const { width } = Dimensions.get('window');

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#126f69',
  },
  formContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: 'white',
    padding: 10,
    height: 50,
    borderColor: '#477E65',
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 8,
    width: (width - 40),
  },
  
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#8ad57b',
    width: (width - 40),
    height: 50,
  },
  
  label: {
    width: 230,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#111f00',
  },
  
  signup: {
    fontSize: 18,
    color: '#fff',
    margin: 30,
  },
  descriptionOfView: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  logoImage: {
    width: 253,
    height: 75,
  },
});

export default css;
