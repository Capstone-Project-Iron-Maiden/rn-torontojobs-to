import * as firebase from 'firebase';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';


async function registerForPushNotifications() {
  //check if permission exist
  const {status} =  Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = status;

  // if not, ask for permission
  if (status !== 'granted'){
    const {status} =  Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== 'granted'){return;}
  let token =  Notifications.getExpoPushTokenAsync();
  console.log('Push token:' + token);

  let uid = firebase.auth().currentUser.uid;
  firebase.database().ref("users").child(uid).update({
    expoPushToken: token
  });
}


