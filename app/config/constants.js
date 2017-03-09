import firebase from 'firebase'


const config = {
  apiKey: "AIzaSyBPWBaVrpNAljHFYVSHsX-UGkx_ipwSaRI",
  authDomain: "robert-test-project.firebaseapp.com",
  databaseURL: "https://robert-test-project.firebaseio.com",
  storageBucket: "robert-test-project.appspot.com",
  messagingSenderId: "624255174389"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
