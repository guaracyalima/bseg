import React, { Component } from 'react';
import {
  ScrollView,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  PixelRatio,
  Image,
} from 'react-native';

import {View, Assets, Constants, Card, Button, Colors, Typography, Text, TextArea} from 'react-native-ui-lib';
import ImagePicker from 'react-native-image-picker';

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
                    videoSource: null
    };
    
    this.__sendMessage = this.__sendMessage.bind(this)
  }

  async __client_details() {
    console.log('me rodou sozinha')
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    await axios.get(`${api.apiUrl}/details/${this.props.cpf}`, { headers: { Authorization: `Bearer ${value}` } })
      .then((res) => {
        this.setState({ client: res.data });
      })
      .catch(error => console.log('erro ao trazer dados do usuario logado', error));
    
    console.log('esta states', this.state)
  }

  async componentWillMount() {
    await  this.__client_details();
  }

  async __sendMessage() {
    let [a] = this.state.client
    this.setState({user_id: a.id})
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    
    await axios.post(`${api.apiUrl}/messages`, {
        phone: this.state.phone,
        message: this.state.message,
        subject: this.state.subject,
        attachmet: this.state.attachmet,
        user_id: this.state.user_id
      },
      { headers: { Authorization: `Bearer ${value}` } })
      .then( res => {
        console.log('Mensagem enviada com sucesso!')
        this.setState({ phone: '', message: '', subject: '', attachmet: '', user_id: ''})
      })
      .catch( error => console.log('Erro ao enviar mensagem', error))
  }
  
  //select photo from library
  
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    }
  
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
      
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      
        this.setState({
          avatarSource: source
        });
      }
    });
  };
  
  selectVideoTapped(){
    const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Gravar video',
      mediaType: 'video',
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
  
  render() {
    return (
      <ScrollView style={css.main}>
        <View style={css.content}>
          <Card
            row // control the children flow direction
            borderRadius={12}
            height={150}
            containerStyle={{marginRight: 20, marginLeft: 20}}>
            <ScrollView>
              <Text>XPTO</Text>
            </ScrollView>
          </Card>
  
          <View style={css.formContainer}>
            
            <Text style={css.titleOfPage}>Nova mensagem</Text>
            <Image style={css.avatar} source={this.state.avatarSource} />
            <TextInput
              style={css.input}
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
              placeholder="Telefone de contato"
              multiline={false}
              placeholderTextColor="#fff"
            />
  
            <TextInput
              style={css.input}
              value={this.state.subject}
              onChangeText={subject => this.setState({ subject })}
              placeholder="Assunto"
              multiline={true}
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
                        onChangeText={message => this.setState({message})}
                        multiline={true}
                        placeholderTextColor="#fff"/>
            </View>
            
            <TouchableOpacity underlayColor="#328fe6" onPress={this.selectPhotoTapped.bind(this)}>
              <Text style={css.label}>Anexar foto</Text>
            </TouchableOpacity>
            
            <TouchableOpacity underlayColor="#328fe6" onPress={this.selectVideoTapped.bind(this)}>
              <Text style={css.label}>Anexar video</Text>
            </TouchableOpacity>

  
            <TouchableOpacity style={css.button} underlayColor="#328fe6" onPress={this.__sendMessage}>
              <Text style={css.label}>Enviar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    );
  }
}
