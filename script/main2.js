let registerform = document.getElementById('registerform')
let userName = document.querySelector('#userName');
let userEmail = document.querySelector('#userEmail');
let userPass = document.querySelector('#userPassword');
let btn1 = document.querySelector('#btn1');
let nameAlert = document.querySelector('#nameAlert');
let emailAlert = document.querySelector('#emailAlert');
let passAlert = document.querySelector('#passAlert');
let exists = document.querySelector('#exists');
let success = document.querySelector('#success');

let allUser = [];

if(localStorage.getItem('allUser') !== null){
    allUser=JSON.parse(localStorage.getItem('allUser'))

}

registerform.addEventListener('submit' , function(e){
e.preventDefault();

if (AllValdationvalid()) {
    console.log('tmam');
    addUser();
}else{
    console.log('mosh tamam');
    
}})


function  addUser() {
    let newUser = {
        name:userName.value,
        email:userEmail.value,
        pass:userPass.value
   }
if(isExit(newUser) == true){
    console.log('email is exists');
    exists.classList.replace('d-none','d-block');
    success.classList.replace('d-block' , 'd-none');
}else{
   console.log(newUser);
   allUser.push(newUser);
   localStorage.setItem('allUser', JSON.stringify(allUser));
   localStorage.setItem('name', newUser.name);
   success.classList.replace('d-none' , 'd-block');
   exists.classList.replace('d-block','d-none');
   window.location.href ='login.html';
}}

function isExit(newUser){
    for (let i = 0; i < allUser.length; i++) {
       if(allUser[i].email.toLowerCase() === newUser.email.toLowerCase()){
        console.log('email is exist');
        return true;
       }
        
    }
}



//valdation
function valdationInput(pattern ,elemnt , alertMsg ){
    let regex = pattern;

    if(regex.test(elemnt.value) == true){
        console.log('valid');
        alertMsg.classList.replace('d-block' , 'd-none')
        return true;
    }else{
        alertMsg.classList.replace('d-none' , 'd-block')
        return false;
    }

}

function AllValdationvalid() {
    if(valdationInput(/^[a-zA-Z]{2,}$/, userName , nameAlert) && valdationInput(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, userEmail , emailAlert) && valdationInput(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/, userPass , passAlert)){
        console.log('all input are valid');
        return true;
         } else{
            console.log('something wrong');
            return false;
         }
}



    //^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$
    // يتحقق من أن كلمة المرور تحتوي على:
    // - حرف واحد على الأقل.
    // - رقم واحد على الأقل.
    // - رمز خاص واحد على الأقل (!@#$ وغيرها).
    // - طول 8 أحرف على الأقل.