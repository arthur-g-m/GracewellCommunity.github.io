const firebaseConfig = {
    apiKey: "AIzaSyAMipDrnQjCPbwlN8S39TIOyCC11NC7Zbc",
    authDomain: "gracewelldatabasewebapp.firebaseapp.com",
    databaseURL: "https://gracewelldatabasewebapp-default-rtdb.firebaseio.com",
    projectId: "gracewelldatabasewebapp",
    storageBucket: "gracewelldatabasewebapp.appspot.com",
    messagingSenderId: "1060415129924",
    appId: "1:1060415129924:web:e18f89a5c3f106eae1ef11",
    measurementId: "G-X70R9XKT64"
  };

  // initialising firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var regFormDB = firebase.database().ref("Registration form")

  document.getElementById("registrationForm").addEventListener("sumbit", submitForm)

function submitForm(e){
       e.preventDefault()

       var name = document.getElementById("name");
       var surname = document.getElementById("surname");
       var email = document.getElementById("email");
       var address = document.getElementById("address");
       var dob = document.getElementById("dob").value;
       var sex = document.querySelector('input [name="sex"] : checked');
       var cellPhone = document.getElementById("cellphone");
       var telephone = document.getElementById("telephone");
       var password = document.getElementById("password");

       saveReg(name, surname, email, address, dob, sex, cellPhone, telephone, password)
       
       //console.log(name, surname, email, address, dob, sex, cellPhone, telephone, password)
}

const saveReg = (name, surname, email, address, dob, sex, cellPhone, telephone, password) => {
    var newReg = regFormDB.push();

    newReg.set({
        name : name,
        surname : surname,
        email : email,
        address : address,
        dob : dob,
        sex : sex,
        cellPhone : cellPhone,
        telephone : telephone,
        password : password,
    })
}

const getElementByVal = (id) => {
    return document.getElementById(id).value;
}