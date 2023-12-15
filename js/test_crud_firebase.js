import { app, database, auth } from './firebase/setup_firebase.js'
import {
  getDatabase,  
  ref,
  child,
  onValue,
  get,
  update,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { uuidv4 } from './functions.js';

const db = getDatabase()

const getDataFromDatabase = (dbName) => {
    const dbRef = ref(db)
    let items = []
    get(child(dbRef,dbName))
    .then((snapshot)=>{
        snapshot.forEach(element => {
            items.push(element.val())
        });
        
    })
    return items
}

const nuevaCotizacion = () => {
  
  let carrito = JSON.parse(localStorage.getItem("carrito"))
  
  let postData = {
    uid: uuidv4(),
    productos: carrito
  };

  // Get a key for a new Post.
  const dbRef = ref(db)
  var newPostKey = dbRef.child('pedidos').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/pedidos/' + newPostKey] = postData;
//   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

window.addEventListener('load',() => {
    let users = getDataFromDatabase('users')
    let pedidos = getDataFromDatabase('pedidos')
    nuevaCotizacion()
    console.log(users)
    console.log(pedidos)
})