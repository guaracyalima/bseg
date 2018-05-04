import {Dimensions, StyleSheet} from 'react-native';
const { width } = Dimensions.get('window');
const css = StyleSheet.create({
  main: {
    backgroundColor: '#005c5b',
    flex: 1
  },
  featured: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  featuredImage: {
    marginTop: 20,
    width: (width - 30),
    height: 200,
    borderRadius: 20,
  },
  wellcomeClient: {
    fontSize: 18,
    width: (width - 25),
    marginTop: 30,
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '600',
    marginBottom: 40,
    textAlign: 'center',
  },
  threeBalls: {
    color: '#fff',
    fontSize: 25
  },
  textOfDescription: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 20
  },
  list_food: {
    flex: 10,
  },
  list_food_item: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  list_food_item_image: {
    //width: (width - 90) / 3,
    width: 80,
    height: 80,
    margin: 10,
  },
  textOfDescriptionOfImage: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 17,
    backgroundColor: '#8ad57b',
    width: 320,
  },
  label: {
    width: (width - 50),
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  logo: {
    marginTop: 50,
    marginBottom: 20,
  },
  logoImage: {
    width: 195,
    height: 41,
  },
  
});

export default css
