// selecteer alle dom elementen
const start = document.querySelector('.start');
const audio = new Audio('assets/startup.mp3');
const car = document.querySelector('.porsche');
const leftTyre = document.querySelector('.lefttyre');
const rightTyre = document.querySelector('.righttyre');
const secondAudio = new Audio('assets/driving.mp3');
const navtyre = document.querySelector('.navtyre');
const menudrawer = document.querySelector('.menudrawer');
const tireAudio = new Audio('assets/tirescreech.mp3');
const speedElement = document.querySelector('.speed');
const dot = document.querySelector('.second');


// let gebruikt zodat hij later in het script veranderd kan worden

let drivingTimeout;
let speedInterval;  
let speed = 0;

// audio voor het rijden na delay

if (start) {
    start.addEventListener('click', startAudio);
}

function startAudio() {
    audio.play();

    if (audio.readyState >= 1) {
        scheduleDriving();
    } else {
        audio.addEventListener('loadedmetadata', scheduleDriving, { once: true });
    }
}

// driving schedule

function scheduleDriving() {
    if (drivingTimeout) clearTimeout(drivingTimeout);

    let overlapTime = 0.5; // seconds
    let timeout = Math.max((audio.duration - overlapTime) * 1000, 0);

    drivingTimeout = setTimeout(function() {
        drivingCar();
    }, timeout);
}

// animatie voor het rijden met de auto en draaiende bandjes

if (car && leftTyre && rightTyre) {
    car.addEventListener('click', drivingCar);
    car.addEventListener('animationend', stopDriving);
}

function drivingCar() {
    car.classList.add('driveby');
    leftTyre.classList.add('tyrespin');
    rightTyre.classList.add('tyrespin');
    secondAudio.play();

    // speed meter beginnen

    if (speedInterval) clearInterval(speedInterval);
    speed = 0;
    if (speedElement) speedElement.textContent = speed + ' km/h';

    speedInterval = setInterval(function() {
        speed += 9
        if (speed > 300) speed = 300; // cap speed
        if (speedElement) speedElement.textContent = speed + ' km/h';
    }, 100);
}

// stoppen met rijden als de animatie af is.

function stopDriving() {
    car.classList.remove('driveby');
    leftTyre.classList.remove('tyrespin');
    rightTyre.classList.remove('tyrespin');
    dot.classList.add('clicked')


    if (speedInterval) clearInterval(speedInterval);
    speed = 0;

    if (speedElement) speedElement.textContent = speed + ' km/h';
}

// navigatie menu met leuk bandje als effect

if (navtyre) {
    navtyre.addEventListener('click', navTyre);
    navtyre.addEventListener('animationend', function() {
        navtyre.classList.remove('rotateme');
    });
}

function navTyre() {
    navtyre.classList.add('rotateme');
    console.log('rotating');
}

// menu drawer zelf, met leuke animatie als hij in beeld komt

if (navtyre && menudrawer) {
    navtyre.addEventListener('click', menuDrawer);
}

function menuDrawer() {
    if (menudrawer.classList.contains('open')) {
        menudrawer.classList.remove('open');
        menudrawer.classList.add('closed');
    } else {
        menudrawer.classList.add('open');
        menudrawer.classList.remove('closed');
    }
    tireAudio.play();
}
