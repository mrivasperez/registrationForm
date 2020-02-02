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
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid.');
    };
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

//Check input length w/ mix max values
function checkLength(input, min, max){
    if (input.value.length < min || input.value.lenght > max) {
        showError(input, `${getFieldName(input)} must have ${min} to ${max} characters.`);
    } else {
        showSuccess(input);
    };
};

// Password validator
function checkPasswordsMath(input1, input2) {
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match.')
    } else if (input2.value === ''){
        showError(input2, 'Please confirm your password.')
    } 
}

// Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

};

// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    // use check required function to check array of fields
    checkPasswordsMath(password, password2);
    checkRequired([username, email, password]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);

    
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