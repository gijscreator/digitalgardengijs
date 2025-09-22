// Hamburger menu javascript //

let burger = document.querySelector('#checkbox');
let nav = document.querySelector('#site-nav');
let closeBtn = document.querySelector('.close-btn');

let toggleMenu = function() { 
    nav.classList.toggle('open'); 
};

burger.addEventListener('click', toggleMenu);

document.querySelectorAll('.mobile-nav .top-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// read more knop javascript //

function toggleButton() {
  let box = this.parentElement;
  box.classList.toggle("open");
  if (box.classList.contains("open")) {
    this.textContent = "Klaar met lezen";
  } else {
    this.textContent = "Journal lezen";
  }
}

let buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(function (btn) {
  btn.onclick = toggleButton;
});

// carousel //

document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButtons = carousel.querySelectorAll('[class^="next-"], [class*=" next-"]');
  const prevButtons = carousel.querySelectorAll('[class^="prev-"], [class*=" prev-"]');

  let currentIndex = 0;

  function updateSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide(currentIndex);
    });
  });

  prevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide(currentIndex);
    });
  });
});



