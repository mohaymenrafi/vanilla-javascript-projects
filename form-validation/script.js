// Selecting nodes
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// first letter uppercase of a string
const getFieldName = (input) =>
  input.id.charAt(0).toUpperCase() + input.id.split('').slice(1).join('');

// Error function
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};

// Success field f
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

// All fields requried / checking empty
const checkRequired = (inputArr) => {
  let isRequired = false;
  inputArr.forEach((input) => {
    if (input.value.trim() !== '') {
      showSuccess(input);
      isRequired = true;
    } else {
      showError(input, `${getFieldName(input)} is required`);
    }
  });
  return isRequired;
};
/*eslint-disable*/

// Email validation with regex
const validateEmail = (userEmail) => {
  const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  /* eslint-enable */

  if (userEmail.value.trim().match(re)) {
    showSuccess(userEmail);
  } else {
    showError(userEmail, 'Enter a valid email');
  }
};

// password field match
function validatePassword(pass1, pass2) {
  if (pass1.value !== pass2.value) {
    showError(pass1, 'Password did not match');
    showError(pass2, 'Password did not match');
  }
}

// Min/max length check of fields
function checkLength(input, min, max) {
  if (input.value.length > max) {
    showError(input, 'Password must be inside 15 characters');
  } else if (input.value.length < min) {
    showError(input, 'Password must be more than 3 characters');
  } else {
    showSuccess(input);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = [username, email, password, password2];
  if (checkRequired(inputs)) {
    validateEmail(email);
    checkLength(username, 3, 15);
    checkLength(password, 6, 15);
    validatePassword(password, password2);
  }
});
