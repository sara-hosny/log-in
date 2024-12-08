let welcomeMsg = document.querySelector('#welcomeMsg');
let logout = document.querySelector('#logout')
window.addEventListener('load' , function () {
    getuserName();
})

function getuserName() {
    welcomeMsg.innerHTML = `Welcome ${localStorage.getItem('name')}`;
}

logout.addEventListener('click' , function logOut() {
   window.location.href ='login.html';
})