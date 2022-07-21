// menu manipulation
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

// popup window
const myProjects = [
  {
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/SnapshootPortfolio.png',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://suzi216.github.io/Portofolio/',
    sourceLink: 'https://github.com/Suzi216/Portofolio/',
  },
  {
    name: 'Multi-Post Stories',
    description:"Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/SnapshootPortfolio1.png',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://suzi216.github.io/Portofolio/',
    sourceLink: 'https://github.com/Suzi216/Portofolio/',
  },

  {
    name: 'Facebook 360',
    description: "Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/SnapshootPortfolio2.png',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://suzi216.github.io/Portofolio/',
    sourceLink: 'https://github.com/Suzi216/Portofolio/',
  },
  {
    name: 'Uber Navigation',
    description: "Lorem Ipsum is simply dummy  dummy text ever since the 1500s, when an unknown printer took a galley my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    featuredImage: 'images/SnapshootPortfolio3.png',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://suzi216.github.io/Portofolio/',
    sourceLink: 'https://github.com/Suzi216/Portofolio/',
  },
];

const popup = document.querySelector('.popup');
const headup = document.querySelector('.headup');
const img = document.querySelector('.img1');
const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const parag = document.querySelector('.below-popup');
const close = document.querySelector('.dis');
const body = document.querySelector('.body');
const btns = [btn, btn1, btn2, btn3];
function popups() {
  const title = document.createElement('h2');
  title.className = 'tonic';
  const image = document.createElement('img');
  image.className = 'img1';
  const paragraph = document.createElement('p');

  headup.prepend(title);
  img.appendChild(image);
  parag.prepend(paragraph);

  for (let i = 0; i < 4; i += 1) {
    btns[i].onclick = function fuc() {
      title.innerText = myProjects[i].name;
      image.src = `${myProjects[i].featuredImage}`;
      paragraph.innerText = `${myProjects[i].description}`;
      popup.style.display = 'block';
    };
    btns[i].addEventListener('click', () => {
      body.classList.toggle('active');
      popup.classList.toggle('active');
    });
  }

  close.onclick = function fuc() {
    popup.style.display = 'none';
    body.classList.toggle('active');
  };
}
popups();
