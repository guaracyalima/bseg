import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  main: {
    backgroundColor: '#00645D',
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  messages: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 5,
    marginLeft: 40,
    marginRight: 40,
    borderColor: '#000',
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    flex: 1
  },
  content: {
    marginTop: 55,
  },
  titleOfNotification: {
    fontSize: 20,
    color: '#00645D',
  },
  shortDescription: {
    fontSize: 14,
    color: '#B7B7B7',
    textAlign: 'center',
  },
  created_at: {
    textAlign: 'right',
    fontSize: 10,
    color: '#B7B7B7',
  },
});

export default css;
