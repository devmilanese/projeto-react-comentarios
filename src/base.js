import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArKUuWAwFd9wA5AR6UF4tFucBXfRYbEIo",
  authDomain: "react-js-1ae68.firebaseapp.com",
  databaseURL: "https://react-js-1ae68.firebaseio.com",
  projectId: "react-js-1ae68",
  storageBucket: "react-js-1ae68.appspot.com",
  messagingSenderId: "325650907519"
})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base