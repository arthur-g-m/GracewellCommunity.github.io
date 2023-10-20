//listen for auth state 
auth.onAuthStateChanged(user => {
    if (user){
        console.log('user loggged in',user)
}
})


//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e)=>{
    e.preventDefault;
    auth.signOut().then(() => {
     console.log('user signed out')
    })
})