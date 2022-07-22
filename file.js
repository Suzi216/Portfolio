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

const email = document.getElementById('email');
const form = document.getElementById('formm');
const errorMessage = document.getElementById('error');

// check if lowercase
function isLowerCase(str) {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}
const errorsms = (e) => {
  if (!isLowerCase(email.value)) {
    e.preventDefault();
    errorMessage.textContent = 'Your Email must be lowercase';
    setTimeout(() => {
      errorMessage.textContent = '';
    }, 3000);
  }
};
form.addEventListener('submit', errorsms);
