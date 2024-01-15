// ---------------------------------------------------Validation---------------------------------------------------\\


var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var movieError = document.getElementById('movieError');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = '*Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = '*Write Full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
};

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = '*Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = '*Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMovie(){
    var movie = document.getElementById('contact-movie').value;

    if(movie.length == 0){
        movieError.innerHTML = '*Movie Name is required';
        return false;
    }
    movieError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


// ---------------------------------------------------Back-End---------------------------------------------------\\



const scriptURL = 'https://script.google.com/macros/s/AKfycbxY6sKJc4pDlgHb9HFECRzsOn5RKVhhvSh7gNd20VuHj--iYeqoDnAxEWAyXi6hyBn_2Q/exec'
const form = document.forms['google-sheet']

function responseFunc(){
    form.reset();
    alert("SUCCESS!!, Your suggetion has been submitted. Click the button below to redirect to website..");
    setInterval(() => {
        location.replace("https://lordsflix.super.site");
    }, 1000);
}

function errorFunc(){
    alert("An error has been occured. Please wait for some time or try again later. Click the button below to redirect to website..");
    setInterval(() => {
        location.replace("https://lordsflix.super.site");
    }, 1000);
}


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => responseFunc())
    .catch(error => errorFunc())
})