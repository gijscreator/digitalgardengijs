const burger = document.querySelector('.header-title1');
const nav = document.querySelector('#site-nav');
const closeBtn = document.querySelector('.close-btn');

const toggleMenu = function() { 
    nav.classList.toggle('open'); 
};

burger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

document.querySelectorAll('.mobile-nav .top-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});