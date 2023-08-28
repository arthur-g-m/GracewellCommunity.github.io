//document.addEventListener("DOMContentLoaded", function() {

const firebaseConfig = {
    apiKey: "AIzaSyDhys7Y81Z0oyo10M1hIzg8t2wQIxxFMYA",
    authDomain: "gracewellweb.firebaseapp.com",
    databaseURL: "https://gracewellweb-default-rtdb.firebaseio.com",
    projectId: "gracewellweb",
    storageBucket: "gracewellweb.appspot.com",
    messagingSenderId: "652542325461",
    appId: "1:652542325461:web:e3c2e33540e195514a285c"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const database = firebase .database()
// Set up our register function
function register () {
// Get all our input fields
          name = document.getElementById("name").value;
          surname = document.getElementById("surname").value;
          email = document.getElementById("email").value;
          address = document.getElementById("address").value;
          dob = document.getElementById("dob").value;
          sex = document.querySelector('input[name="sex"]:checked').value;
          cellPhone = document.getElementById("cellphone").value;
          telephone = document.getElementById("telephone").value;
          password = document.getElementById("password").value;
}
 
auth. createUserWithEmailAndPassword(email, password)
.then(function() {

    var user = auth.currentUser
    
    //Adding user to databse
    var database_ref = database.ref()

    //create variaBLE USER Data
    var user_data = {
          name : name,
          surname : surname,
          email : email,
          address : address,
          dob : dob,
          sex : sex,
          cellPhone : cellPhone,
          telephone : telephone,
    }





    alert('User created')

     
})
.catch(function(error) {
// Firebase will use this to alert of its errors
var error_code = error. code
var error_message = error .message
alert (error_message)
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  // initialising firebase
//  firebase.initializeApp(firebaseConfig);

  // reference your database
 // var regFormDB = firebase.database().ref("registrationForm")

 // document.getElementById("registrationForm").addEventListener("submit", submitForm)

//function submitForm(e){
 //      e.preventDefault()

//       var name = document.getElementById("name").value;
//       var surname = document.getElementById("surname").value;
 //      var email = document.getElementById("email").value;
//       var address = document.getElementById("address").value;
 //      var dob = document.getElementById("dob").value;
 //      var sex = document.querySelector('input[name="sex"]:checked').value;
 //      var cellPhone = document.getElementById("cellphone").value;
 //      var telephone = document.getElementById("telephone").value;
 //      var password = document.getElementById("password").value;

 //      saveReg(name, surname, email, address, dob, sex, cellPhone, telephone, password)
       
  //     console.log(name, surname, email, address, dob, sex, cellPhone, telephone, password)
//}

//const saveReg = (name, surname, email, address, dob, sex, cellPhone, telephone, password) => {
   // var newReg = regFormDB.push();
//
   // newReg.set({
   //     name : name,
    //    surname : surname,
   //     email : email,
    //    address : address,
   //     dob : dob,
   //     sex : sex,
   //     cellPhone : cellPhone,
   //     telephone : telephone,
   //     password : password,
  //  })
//}

//const getElementByVal = (id) => {
//    return document.getElementById(id).value;
//}
//});