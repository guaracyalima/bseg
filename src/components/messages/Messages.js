import React, { Component } from 'react';
import {
  ScrollView,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  PixelRatio,
  CameraRoll,
  Image,
} from 'react-native';

import {View, Assets, Constants, Card, Button, Colors, Typography, Text, TextArea} from 'react-native-ui-lib';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob'
import css from '../../styles/message.styles';
import axios from 'axios/index';
import { api } from '../../../env';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
                    client: [],
                    phone: '',
                    message: '',
                    subject: '',
                    attachmet: '',
                    user_id: '',
                    avatarSource: null,
                    videoSource: null,
                    teste: null,
                    lastConversation: [],
                    replies: []
    };
    
    this.__sendMessage = this.__sendMessage.bind(this);
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    this.__getPhotosFromgalery = this.__getPhotosFromgalery.bind(this)
  }

  async __client_details() {
    console.log('me rodou sozinha')
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    await axios.get(`${api.apiUrl}/details/${this.props.cpf}`, { headers: { Authorization: `Bearer ${value}` } })
      .then((res) => {
        this.setState({ client: res.data });
      })
      .catch(error => console.log('erro ao trazer dados do usuario logado', error));
  
    await axios.get(`${api.apiUrl}/messages/my_messages/${this.props.user_id}`, { headers: { Authorization: `Bearer ${value}` } })
      .then((res) => {
        this.setState({ lastConversation: res.data, replies: res.data.replies });
        console.log('minha ultima mensagem', this.state.lastConversation)
      })
      .catch(error => console.log('Erro ao buscar mensagens', error));
    
    console.log('esta states', this.state)
  }

  async componentWillMount() {
    await  this.__client_details();
  }
  
  // __renderReplies() {
  //   const { replies } = this.state
  //   console.log('the replies', replies)
  //   if(replies !== 0 || replies !== undefined){
  //    return(
  //      <View style={css.reply}>
  //        <Text style={css.replyText}>{replies.body}</Text>
  //      </View>
  //    )
  //   } return false;
  // }
  
  __getPhotosFromgalery(){
    CameraRoll.getPhotos({first: 20})
      .then( res => {
        console.log('res images data', res)
      })
  }
  __renderHistoricalConversationCard(){
    const { lastConversation } = this.state
    return(
      <View style={css.historicMessagesContainer}>
    
        <View style={css.sender}>
          <Text style={css.senderText}>{lastConversation.message}</Text>
        </View>
  
        {this.__renderReplies()}
  
      </View>
    )
  }

  async __sendMessage() {
    let [a] = this.state.client
    this.setState({user_id: 11})
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    
    let body = new  FormData();
    body.append('photo', {uri: this.state.avatarSource, name: 'image.jpg', type: 'multipart/form-data'})
    body.append('phone', this.state.phone)
    body.append('message', this.state.message)
    body.append('subject', this.state.subject)
    body.append('user_id', this.state.user_id)
    
    await axios.post(`${api.apiUrl}/messages`, body,
      { headers: { Authorization: `Bearer ${value}`} })
      .then( res => {
        console.log('Mensagem enviada com sucesso!', res)
        this.setState({ phone: '', message: '', subject: '', attachmet: '', user_id: ''})
      })
      .catch( error => console.log('Erro ao enviar mensagem', error))
    
    
  }
  
  
  selectPhotoTapped() {
    const options = {
      title: 'Camera',
      quality: 1.0,
      takePhotoButtonTitle: 'Tirar foto',
      chooseFromLibraryButtonTitle: 'Buscar na galeria',
      storageOptions: {
        skipBackup: true
      }
    }
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
      }
      else if (response.error) {
      }
      else if (response.customButton) {
      }
      else {
        let source = { uri: response.uri };
        // You can also display the image using data:
        //let source = { uri: 'data:image/jpeg;base64,' + response.data };
      
        this.setState({
          avatarSource: source.uri
        });
      }
    });
  };
  
  selectVideoTapped(){
    const options = {
      title: 'Camera',
      takePhotoButtonTitle: 'Gravar video',
      chooseFromLibraryButtonTitle: 'Buscar na galeria',
      //mediaType: 'video',
      videoQuality: 'medium',
    };
    
    ImagePicker.showImagePicker(options, response => {
      console.log('resposta do video', response)
  
      if (response.didCancel) {
        console.log('User cancelled video picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        this.setState({
          videoSource: response.uri
        });
      }
    })
  }
  
  __renderImage(){
    const { avatarSource } = this.state
    if(avatarSource !== null){
      return (
        <Image style={css.avatar} source={{uri: `${this.state.avatarSource}`}} />
      )
    } else {
      return false;
    }
  }
  render() {
    return (
      <ScrollView style={css.main}>
        <View style={css.content}>
          <View style={css.formContainer}>
            <Text style={css.titleOfPage}>Nova mensagem</Text>
            {this.__renderImage()}
            <TextInput
              style={css.input}
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
              placeholder="Telefone de contato"
              multiline={false}
              underlineColorAndroid="transparent"
              placeholderTextColor="#fff"
            />
  
            <TextInput
              style={css.input}
              value={this.state.subject}
              onChangeText={subject => this.setState({ subject })}
              placeholder="Assunto"
              multiline={true}
              underlineColorAndroid="transparent"
              placeholderTextColor="#fff"/>
  
            <View
              style={{
                height: 100,
                borderWidth: 1,
                marginBottom: 5,
                padding: 10,
                borderColor: '#fff',
                borderRadius: 15,
                backgroundColor: 'transparent',
                width: 320,
              }}>
              <TextArea
                        placeholder="Escreva sua mensagem"
                        style={css.input}
                        value={this.state.message}
                        onChangeText={text => this.setState({ message: text })}
                        multiline={true}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#fff"/>
            </View>
  
            <View style={css.uploadButtons}>
              <View>
                <TouchableOpacity underlayColor="#328fe6" onPress={this.selectPhotoTapped} style={css.uploadBtn}>
                  <Text style={css.label}>ANEXAR FOTO</Text>
                </TouchableOpacity>
              </View>
    
              {/*<View>*/}
                {/*<TouchableOpacity underlayColor="#328fe6" onPress={this.__getPhotosFromgalery} style={css.uploadBtn}>*/}
                  {/*<Text style={css.label}>Anexar video</Text>*/}
                {/*</TouchableOpacity>*/}
              {/*</View>*/}
            </View>

  
            <TouchableOpacity style={css.button} underlayColor="#328fe6" onPress={this.__sendMessage}>
              <Text style={css.label}>ENVIAR</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    );
  }
}
