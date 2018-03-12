import { StyleSheet } from 'react-native';

export const colors = {
  black: 'transparent',
  gray: '#888888',
  background1: '#005c5b',
  background2: '#005c5b',
};

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background1,
    marginTop: 50,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollview: {
    flex: 1,
  },
  exampleContainer: {
    paddingVertical: 30,
  },
  exampleContainerDark: {
    backgroundColor: colors.black,
  },
  exampleContainerLight: {
    backgroundColor: 'white',
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  titleDark: {
    color: colors.black,
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  slider: {
    marginTop: 15,
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  insurerName: {
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -260,
    justifyContent: 'flex-start',
  },
  descriptionOfInsurance: {
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',
  },
  rowOfButtons: {
    // marginTop: -150,
    paddingHorizontal: 55,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  borderGreenOfButton: {
    marginTop: 50,
    borderColor: '#8ad57b',
    borderWidth: 2,
    borderRadius: 30,
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
  },
  textOfButtonInCircleGreen: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 25,
    textAlign: 'center',
    paddingRight: 5,
  },
});
