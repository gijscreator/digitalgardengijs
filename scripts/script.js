
const start = document.querySelector('.start')
const audio = new Audio('assets/startup.mp3')

start.addEventListener('click', startAudio)

function startAudio () {
  audio.play()
  audio.addEventListener('ended', drivingCar);
}



// Animatie voor de auto, 2 banden en de auto links naar rechts 

const car = document.querySelector('.porsche');
const leftTyre = document.querySelector('.lefttyre');
const rightTyre = document.querySelector('.righttyre');
const secondAudio = new Audio('assets/driving.mp3')

car.addEventListener('click', drivingCar)

function drivingCar () {
  car.classList.toggle('driveby');
  leftTyre.classList.toggle('tyrespin');
  rightTyre.classList.toggle('tyrespin');
  secondAudio.play()
}

car.addEventListener('animationend', drivingCar)


// Menu drawer met band als icon

const navtyre = document.querySelector('.navtyre')

navtyre.addEventListener('click', navTyre)

function navTyre () {
  navtyre.classList.toggle('rotateme');
}

navtyre.addEventListener('animationend', navTyre)

// Menu drawer zelf met animaties

const menudrawer = document.querySelector('.menudrawer')
const tireAudio = new Audio ('assets/tirescreech.mp3')

navtyre.addEventListener('click', menuDrawer)

function menuDrawer () {

  if (menudrawer.classList.contains('open')) {
    menudrawer.classList.remove('open');
    menudrawer.classList.add('closed');
    tireAudio.play()

  } else {
    menudrawer.classList.add('open');
    menudrawer.classList.remove('closed');
    tireAudio.play()
  }
}



// slipsporen toevoegen