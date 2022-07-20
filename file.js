//menu manipulation
const ham = document.querySelector('.ham');
const navbar = document.querySelector('.navigator-link');
const x = document.querySelector('.x');
const container = document.querySelector('.container');
const popupsec = document.getElementById(".All-section");

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
//popup window
const myProjects = [
  {
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/SnapshootPortfolio.png',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://suzi216.github.io/Portofolio/',
    sourceLink: 'https://github.com/Suzi216/Portofolio/',
  },
   {
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/SnapshootPortfolio1.png',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://suzi216.github.io/Portofolio/',
    sourceLink: 'https://github.com/Suzi216/Portofolio/',
  },

   {
    name: 'Facebook 360',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/SnapshootPortfolio2.png',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://suzi216.github.io/Portofolio/',
    sourceLink: 'https://github.com/Suzi216/Portofolio/',
  },
 {
    name: 'Uber Navigation',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    featuredImage: 'images/SnapshootPortfolio3.png',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://suzi216.github.io/Portofolio/',
    sourceLink: 'https://github.com/Suzi216/Portofolio/',
  },
];

const popup =  document.querySelector('.popup');
const headup =  document.querySelector('.headup');
const img =  document.querySelector('.img1');
const btns =  document.querySelector('.Job1-btn');
const parag =  document.querySelector('.below-popup');
const close =  document.querySelector('.dis');
const main =  document.querySelector('.main');
function popups(){
  const title = document.createElement("h2");
  title.className = 'tonic';
  const image = document.createElement("img");
  image.className="img1";
  const paragraph = document.createElement("p");


  for (let i = 0; i < 4; i++) {
    title.innerText = myProjects[0].name;
    image.src = `${myProjects[0].featuredImage}`;
    paragraph.innerText = `${myProjects[0].description}`;
  }
  headup.prepend(title);
  img.appendChild(image);
  parag.prepend(paragraph);


  btns.onclick = function () {
    popup.style.display = 'block';
    // main.style.filter = blur(2px);
  };

  close.onclick = function () {
    popup.style.display = 'none';
  };

}
popups();

console.log(myProjects[1].name)
