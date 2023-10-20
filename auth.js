import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
locked


//listen for auth state 
auth.onAuthStateChanged(user => {
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