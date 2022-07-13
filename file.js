const ham = document.querySelector('.ham');
const navbar=document.querySelector('.navigator-link');
const x=document.querySelector('.x');

x.addEventListener('click', () => {
  navbar.classList.toggle('active');

});
ham.addEventListener('click', () => {
  navbar.classList.toggle('active');

});
document.querySelectorAll(".link").forEach(n=> n.addEventListener("click",()=>{
  navbar.classList.remove('active');
}))
