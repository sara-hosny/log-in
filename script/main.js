let loginform = document.querySelector('#login-form');
let loginemail = document.querySelector('.form-email')
let loginpassword = document.querySelector('#Password');
let btn = document.querySelector('#btn');
let eror = document.querySelector("#eror");
let done = document.querySelector('#done');

let allUser = [];

if(localStorage.getItem('allUser') !== null){
    allUser=JSON.parse(localStorage.getItem('allUser'))
}

loginform.addEventListener('submit' , function(e) {
   e.preventDefault(e) ;
   loginUser();
})

function loginUser(){
    let userdata = {
        email:loginemail.value,
        password:loginpassword.value,
    }

    if(loginValdtion(userdata) == true){
     console.log('user found');
     done.classList.replace('d-none' , 'd-block');
     eror.classList.replace('d-block', 'd-none');
     window.location.href = 'welcome.html'
    }else{
        console.log('user not found');
        done.classList.replace('d-block' , 'd-none');
     eror.classList.replace('d-none', 'd-block');
    }
}

function loginValdtion(userdata) {
    for (let i = 0; i < allUser.length; i++) {
        if (
            allUser[i].email.toLowerCase() == userdata.email.toLowerCase() &&
            allUser[i].pass.toLowerCase() == userdata.password.toLowerCase()
        ) {
            return true;
        }
    }
    return false; 
}


