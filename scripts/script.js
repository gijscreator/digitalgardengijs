const start = document.querySelector('.start')
const audio = new Audio('/assets/startup.mp3')
const car = document.querySelector('.porsche')
const leftTyre = document.querySelector('.lefttyre')
const rightTyre = document.querySelector('.righttyre')
const secondAudio = new Audio('/assets/driving.mp3')
const navtyre = document.querySelector('.navtyre')
const menudrawer = document.querySelector('.menudrawer')
const tireAudio = new Audio('/assets/tirescreech.mp3')


// Start audio
if (start) {
  start.addEventListener('click', startAudio)
}

function startAudio () {
  audio.play()
  audio.addEventListener('ended', drivingCar)
  console.log('im driving')
}


// Animatie voor de auto, 2 banden en de auto links naar rechts 
if (car && leftTyre && rightTyre) {
  car.addEventListener('click', drivingCar)
  car.addEventListener('animationend', drivingCar)
}

function drivingCar () {
  car.classList.toggle('driveby')
  leftTyre.classList.toggle('tyrespin')
  rightTyre.classList.toggle('tyrespin')
  secondAudio.play()
}


// Menu drawer met band als icon
if (navtyre) {
  navtyre.addEventListener('click', navTyre)
  navtyre.addEventListener('animationend', () => {
    navtyre.classList.remove('rotateme')
  })
}

function navTyre () {
  navtyre.classList.add('rotateme')
  console.log('rotating')
}


// Menu drawer zelf met animaties
if (navtyre && menudrawer) {
  navtyre.addEventListener('click', menuDrawer)
}

function menuDrawer () {
  if (menudrawer.classList.contains('open')) {
    menudrawer.classList.remove('open')
    menudrawer.classList.add('closed')
  } else {
    menudrawer.classList.add('open')
    menudrawer.classList.remove('closed')
  }
  tireAudio.play()
}
