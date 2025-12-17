const car = document.querySelector('.porsche');
const leftTyre = document.querySelector('.lefttyre');
const rightTyre = document.querySelector('.righttyre');

car.addEventListener('click', () => {
  car.classList.toggle('driveby');
  leftTyre.classList.toggle('tyrespin');
  rightTyre.classList.toggle('tyrespin');
  
});

const navtyre = document.querySelector('.navtyre')

navtyre.addEventListener('click', () => {
  navtyre.classList.toggle('rotateme');
  console.log("im rotating")
  
});

const menudrawer = document.querySelector('.menudrawer')

navtyre.addEventListener('click', () => {
  menudrawer.classList.toggle('open')

});



