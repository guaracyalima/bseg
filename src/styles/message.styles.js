import {PixelRatio, StyleSheet} from 'react-native';

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
    marginTop: 85,
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
  formContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleOfPage: {
    marginBottom: 5,
    color: '#fff',
    fontSize: 20,
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
    borderColor: '#8ad57b',
    padding: 10,
    marginTop: 60,
    backgroundColor: '#8ad57b',
    width: 320
  },
  label: {
    width: 230,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#000'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 30,
    height: 30
  },
  uploadButtons: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  uploadBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#8ad57b',
    padding: 10,
    margin: 3,
    backgroundColor: '#8ad57b',
    width: 130
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 30,
    height: 30
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  historicMessagesContainer: {
    margin: 10,
    padding: 5,
  },
  sender: {
    backgroundColor: '#ddf9c3',
    alignItems: 'flex-end',
  },
  senderText: {
    fontSize: 16,
    color: '#00645D'
  },
  reply: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  replyText: {
    fontSize: 16,
    color: '#00645D'
  },
});

export default css;
