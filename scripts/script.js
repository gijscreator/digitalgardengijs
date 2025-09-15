// Hamburger menu javascript //

const burger = document.querySelector('#checkbox');
const nav = document.querySelector('#site-nav');
const closeBtn = document.querySelector('.close-btn');

const toggleMenu = function() { 
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

