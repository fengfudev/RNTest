import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

const config = {
  apiKey: "AIzaSyCSBTLmbIXgiYhrkJ0iq4tc2bhJjIsJsbg",
  authDomain: "kentroad-36c5a.firebaseapp.com",
  databaseURL: "https://kentroad-36c5a.firebaseio.com",
  storageBucket: "kentroad-36c5a.appspot.com",
  messagingSenderId: "688310100119"
}

export default class FireStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config)
    super(firebase.database().ref())
  }

}