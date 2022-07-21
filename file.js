const ham = document.querySelector('.ham');
const navbar = document.querySelector('.navigator-link');
const x = document.querySelector('.x');
const container = document.querySelector('.container');
x.addEventListener('click', () => {
  navbar.classList.toggle('active');
  container.classList.toggle('active');
});
ham.addEventListener('click', () => {
  navbar.classList.toggle('active');
  container.classList.toggle('active');
});
document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  navbar.classList.remove('active');
  container.classList.remove('active');
}));

// validation form

// check if lowercase
const form = document.querySelector('.form1');
function isLowerCase(str) {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}
let text = '';
// contact form button validation
function myFunction() {
  const email = document.getElementById('email').value;
  if (isLowerCase(email)) {
    text = ' ';
  } else {
    form.addEventListener('submit', (event) => {
      text = 'Your email must be in lowercase';
      setTimeout(() => {
        document.getElementById('error').textContent = '';
      }, 3000);
      event.preventDefault();
    });
  }
  document.getElementById('error').innerHTML = text;
}
myFunction();
