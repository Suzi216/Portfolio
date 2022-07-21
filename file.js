

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

//check if lowercase

function isLowerCase(str)
{
    return str == str.toLowerCase() && str != str.toUpperCase();
}


// contact form button validation
function myFunction() {
  let email = document.getElementById("email").value;
  if (isLowerCase(email)) {
    function submitForm(event){
         event.preventDefault();
     }
    text = "";
  } else {
    event.preventDefault();
    text = "Input not Okay";
    // console.log(email);
  }
  document.getElementById("error").innerHTML = text;
}
