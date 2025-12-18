// Animatie voor de auto, 2 banden en de auto links naar rechts 

const car = document.querySelector('.porsche');
const leftTyre = document.querySelector('.lefttyre');
const rightTyre = document.querySelector('.righttyre');

car.addEventListener('click', drivingCar)

function drivingCar () {
  car.classList.toggle('driveby');
  leftTyre.classList.toggle('tyrespin');
  rightTyre.classList.toggle('tyrespin');
}


// Menu drawer met band als icon

const navtyre = document.querySelector('.navtyre')

navtyre.addEventListener('click', navTyre)

function navTyre () {
  navtyre.classList.toggle('rotateme');
}

navtyre.addEventListener('animationend', navTyre)

// Menu drawer zelf met animaties

const menudrawer = document.querySelector('.menudrawer')

navtyre.addEventListener('click', menuDrawer)

function menuDrawer () {

  if (menudrawer.classList.contains('open')) {
    menudrawer.classList.remove('open');
    menudrawer.classList.add('closed');
  } else {
    menudrawer.classList.add('open');
    menudrawer.classList.remove('closed');
  }
}



// slipsporen toevoegen