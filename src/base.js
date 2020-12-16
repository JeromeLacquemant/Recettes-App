import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDuM2VX5njpL7CasPbJsyEZ9VqC8RP1Boo",
  authDomain: "recettes-app-d2cb4.firebaseapp.com",
  databaseURL: "https://recettes-app-d2cb4-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
