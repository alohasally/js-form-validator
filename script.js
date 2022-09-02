const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm(){
    //Using Contraint API
    isValid = form.checkValidity();
    // Style main message for an error
  if(!isValid){
    message.textContent = 'Plese fill out all fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  // Check to see if passwords match
  if (password1El.value === password2El.value){
    passwordsMatch = true;
    password1El.style.borderColor = '#2dffb5';
    password2El.style.borderColor = '#2dffb5';
} else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    messageContainer.style.borderColor = '#ff572d';
    password1El.style.borderColor = '#ff572d';
    password2El.style.borderColor = '#ff572d';
    return;
}
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = '#2dffb5';
        messageContainer.style.borderColor = '#2dffb5';
    }

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
};

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submit Data if Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);
