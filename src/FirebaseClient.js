import FirebaseConstants from "./FirebaseConstants";
import { Alert } from "react-native";

const API_URL = "https://fcm.googleapis.com/fcm/send";

class FirebaseClient {
  
  async send(body, type) {
    if(FirebaseClient.KEY === 'AAAAr-hXtPQ:APA91bG0bXIGNmG3_7W4q6Kf0bp9UzKbz1OY-QqjTiv0j3c5QP5IyWgZ2pzZEzRzvcxlqj6kr41VH981Oj9Xf7JW07I9SSt3cz6-v1toSt9T1gvxefd3xRfRE9Id1z0usQZANvqfC0dJ'){
      Alert.alert('Set your API_KEY in app/FirebaseConstants.js')
      return;
    }
    let headers = new Headers({
      "Content-Type": "application/json",
      "Authorization": "key=" + FirebaseConstants.KEY
    });
    
    try {
      let response = await fetch(API_URL, { method: "POST", headers, body });
      console.log(response);
      try{
        response = await response.json();
        if(!response.success){
          Alert.alert('Erro ao enviar notificação, check error log')
        }
      } catch (err){
        Alert.alert('Erro ao enviar notificação, check error log')
      }
    } catch (err) {
      Alert.alert(err && err.message)
    }
  }
  
}

let firebaseClient = new FirebaseClient();
export default firebaseClient;
