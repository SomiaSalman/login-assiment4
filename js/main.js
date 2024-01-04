var userNameInput=document.getElementById('nameInput');
var userMailInput=document.getElementById('emailInput');
var userPassInput=document.getElementById('passInput');
var alertempty=document.getElementById('emptyalert');
var openSignUp=document.getElementById('signUp');

var signupBtn=document.getElementById('signButton');
var successMsg=document.getElementById('success');

var invalidSpan=document.getElementById('invalid');
// var existSpan=document.getElementById('existMail');

var regex=/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
var usersList=[];

// localStorage.removeItem('links','personList'); 
if (localStorage.getItem('users')!=null){
    usersList=JSON.parse(localStorage.getItem('users'));
}
if(signupBtn!=null){
    signupBtn.addEventListener('click',function(){
        if(userNameInput.value!=""&& userMailInput.value!=""&&userPassInput.value!=""){
            if (validEmail()==true){ 
                if(isEmailExist()==false){
                    var user={
                        name:userNameInput.value,
                        mail:userMailInput.value,
                        password:userPassInput.value,
                    };
                    usersList.push(user);
                    localStorage.setItem('users',JSON.stringify(usersList))
                    successMsg.innerHTML='success';
                    successMsg.classList.replace('d-none','d-block');
                    invalidSpan.classList.replace('d-block','d-none') ;

                }}
                else{
                    invalidSpan.innerHTML='please enter valid email';
                    invalidSpan.classList.replace('d-none','d-block') ;
                    alertempty.classList.replace('d-block','d-none');

                }     
            }else{
                alertempty.innerHTML='All inputs are required';
                alertempty.classList.replace('d-none','d-block');
                invalidSpan.classList.replace('d-block','d-none') ;

            }
            clear();
    })
}

function isEmailExist(){
    for(var i=0;i<usersList.length;i++){
        if(usersList[i].mail==userMailInput.value){
            alertempty.innerHTML='email already exists';
            alertempty.classList.replace('d-none','d-block');
            return true
        }
    }
    return false;

    }

    function validEmail(){
        return regex.test(emailInput.value);
    }
function clear(){
    userNameInput.value="";
    userMailInput.value="";
    userPassInput.value="";

}    
///login
var loginEmail=document.getElementById('loginEmail')
var loginPassword=document.getElementById('loginPassword')
var loginLink=document.getElementById('login');
var loginExist=document.getElementById('loginexist')
var loginBtn=document.getElementById('loginButton');
var alertLogin=document.getElementById('loginempty');

if(loginBtn!=null){
    loginBtn.addEventListener('click',function(){
        console.log('log')
        if(loginEmail.value!=""&&loginPassword.value!=""){
            var loginusers=JSON.parse(localStorage.getItem('users'));
            for (var i=0; i<loginusers.length ; i++){
                if(loginusers[i].mail==loginEmail.value&&loginusers[i].password==loginPassword.value){
                    localStorage.setItem('username',loginusers[i].name);
                    location.href='../welcome.html'
                }
            }
            alertLogin.innerHTML='incorrect email or password';
        }
        else{
            alertLogin.innerHTML='All inputs are required';
            // alertempty.innerHTML='All inputs are required';
            }
    })
}

///welcome///
var welcomeMessage=document.getElementById('welcomeMessage');
if(welcomeMessage!=null){
    welcomeMessage.innerHTML=`Welcome ${localStorage.getItem('username')}`

}








