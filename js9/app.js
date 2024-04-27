let slidesContainer = document.querySelector('.slides');

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      let slide = document.createElement('div');
      slide.classList.add('slide');
      slide.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
      `;
      slidesContainer.appendChild(slide);
    });
  })

let currentIndex = 0;
let slides = [];

function showSlide(index) {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  slides[currentIndex].style.display = 'block';
}

setTimeout(() => {
  slides = document.querySelectorAll('.slide');
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 2000); 
}, 1000); 