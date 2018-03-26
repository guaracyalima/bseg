import { StyleSheet } from 'react-native';

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
    color: '#fff',
    padding: 10,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginBottom: 15,
    width: 320,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#fff',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#8ad57b',
    width: 320,
  },
  label: {
    width: 230,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
  },
  signup: {
    fontSize: 18,
    color: '#fff',
    margin: 30,
  },
  descriptionOfView: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 30,
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
