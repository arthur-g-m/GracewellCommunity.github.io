import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// THIS is the connection code. for the most part the rest of the code remains the same. this just has to be pasted on the same area on all pages to do with a connection with the databse ] 
const firebaseConfig = {
  apiKey: "AIzaSyBW95P-YZ0GWJDdc_VYF8KC5VhDU5y9278",
  authDomain: "gracewelldatabase.firebaseapp.com",
  databaseURL: "https://gracewelldatabase-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gracewelldatabase",
  storageBucket: "gracewelldatabase.appspot.com",
  messagingSenderId: "373455644093",
  appId: "1:373455644093:web:fdf02a68760c1d7c95ded4",
  measurementId: "G-QE913070ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//listen for auth state 
getAuth().onAuthStateChanged(user => {
    if (user){
        console.log('user loggged in',user)
}
})


//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e)=>{
    e.preventDefault();
    auth.signOut().then(() => {
     console.log('user signed out')
    })
})