//contact form
const labelMove = document.querySelectorAll('label');
const mainInput = document.querySelectorAll('.form-item input');

mainInput.forEach(item => {
  item.addEventListener('focus', function () {
    labelMove.forEach(function (e) {
      e.classList.add('label-active');
    });
  });
});

const signBtn = document.querySelector('.sign-btn');
const confPass = document.querySelector('.confirm-pass');
const userName = document.querySelector('.name-sec');
const submitBtn = document.getElementById('submit');
const formSection = document.querySelector('.form-section');
const form = document.querySelector('form');
const tabBorder = document.querySelector('.outline');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputConPass = document.getElementById('confirm');
const errNameMsg = document.querySelector('.errName');
const errEmailMsg = document.querySelector('.err-email');
const errPassMsg = document.querySelector('.err-pass');
const errConfMsg = document.querySelector('.err-conf-pass');

function nameValid() {
  if (inputName.value === '') {
    errNameMsg.classList.add('errmsg');
  }
  if (inputName.value !== '') {
    errNameMsg.classList.remove('errmsg');
  }
  if (!inputEmail.value.includes('@')) {
    errEmailMsg.classList.add('errmsg');
  }
  if (inputEmail.value.includes('@')) {
    errEmailMsg.classList.remove('errmsg');
  }
  if (inputPassword.value.length < 5) {
    errPassMsg.classList.add('errmsg');
  }
  if (inputPassword.value.length > 5) {
    errPassMsg.classList.remove('errmsg');
  }
  if (inputPassword.value !== inputConPass.value) {
    console.log('hello');
    errConfMsg.classList.add('errmsg');
  }
  if (inputPassword.value === inputConPass.value) {
    errConfMsg.classList.remove('errmsg');
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  nameValid();
});
