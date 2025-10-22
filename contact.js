const form = document.getElementById('contact-form');
const success = document.getElementById('contact-success');

const fields = {
  name:    document.getElementById('contact-name'),
  email:   document.getElementById('contact-email'),
  subject: document.getElementById('contact-subject'),
  message: document.getElementById('contact-message')
};

const errors = {
  name:    document.getElementById('err-name'),
  email:   document.getElementById('err-email'),
  subject: document.getElementById('err-subject'),
  message: document.getElementById('err-message')
};

function showError(key, msg){
  errors[key].textContent = msg;
  errors[key].style.display = 'block';
  fields[key].setAttribute('aria-invalid', 'true');
}

function clearError(key){
  errors[key].textContent = '';
  errors[key].style.display = 'none';
  fields[key].removeAttribute('aria-invalid');
}

function isEmail(v){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // clear all previous errors
  Object.keys(errors).forEach(clearError);

  // Required checks
  if(!fields.name.value.trim()){
    showError('name','Full name is required.');
    valid = false;
  }
  if(!fields.email.value.trim()){
    showError('email','Email is required.');
    valid = false;
  } else if(!isEmail(fields.email.value.trim())){
    showError('email','Enter a valid email like name@example.com.');
    valid = false;
  }
  if(!fields.subject.value.trim()){
    showError('subject','Subject is required.');
    valid = false;
  }
  if(!fields.message.value.trim()){
    showError('message','Message is required.');
    valid = false;
  } else if(fields.message.value.trim().length < 10){
    showError('message','Message must be at least 10 characters.');
    valid = false;
  }

  if(valid){
    success.textContent = "Message sent successfully!";
    success.style.display = 'block';
    form.reset();
    // keep keyboard flow friendly
    form.querySelector('[data-testid="test-contact-submit"]').focus();
  }
});
