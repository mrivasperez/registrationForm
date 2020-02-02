// get all DOM elements that we need
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

//Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// check required fields
function checkRequired(inputArr){
    // use high order array method to loop through array
    inputArr.forEach(function(input){
        if(input.value.trim()=== ''){
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }

    });

};

// Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

};

// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    // use check required function to check array of fields
    checkRequired([username, email, password, password2]);
    
    /* 
    !!! If you would prefer to use if statements to validate code use this:
    Check username
    if(username.value === ''){
        showError(username, 'Username is required.');
    } else {
        showSuccess(username);
    }
    // Check email
    if(email.value === ''){
        showError(email, 'Email is required.');
    } else if(!isValidEmail(email.value)){
        showError(email, 'Email is not valid.');
    } else {
        showSuccess(email);
    };
    //Check password
    if(password.value === ''){
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }
    // check password2
    if(password2.value === ''){
        showError(password2, 'Please confirm your password.');
    } else if(password2.value !== password.value){
        showError(password2, 'Your passwords do not match');
    } else {
        showSuccess(password2);
    }
    */
});