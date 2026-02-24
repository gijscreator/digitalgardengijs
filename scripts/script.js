/**
 * 1. AUTOMATED SPAM (Moved to top for priority)
 */
(async function initAutomatedSpam() {
    const url = "https://krijnhoetmer.nl/fdnd";
    const messageBase = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⠶⠒⠒⠒⠒⠒⠶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⠋⠉⠀⠀⠀⠀⠀⢀⣴⣄⣤⣌⠹⠶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡀⠀⠀⠀⠀⠀⠀⠀⣰⠿⠋⠀⠀⠀⠀⠀⣠⣼⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⡀⣀⣀⣦⠀⠀⠀⠀⠀
⠸⣧⣀⡀⢠⣄⣀⣠⣾⠁⠀⠀⠀⠀⢀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⢻⡟⠀⠀⠀⠀⠀
⠀⢹⡟⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⣺⣿⣿⡿⢿⣿⣿⣿⣿⣿⡿⠿⠿⠿⢿⣿⣷⣶⠇⠀⠀⠀⠀⠀
⠀⠀⡿⠿⠟⠛⣿⠇⠀⠀⠀⠀⠀⠀⠘⣿⡟⡁⠀⠀⠀⠉⠙⠛⠛⠀⠀⠀⠀⠘⣿⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⢹⡏⢉⡟⠁⠀⠀⠀⠀⠀⠀⠀⢸⢿⠃⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣏⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢻⣸⡇⠀⠀⠀⠀⠀⠀⠀⠀⢸⣾⣀⣼⣶⣶⣦⡀⠀⠀⢀⣠⣤⣤⣤⣼⢾⣿⡟⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⣟⡇⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣻⣿⠟⣻⣿⣿⣿⣷⣿⣿⣛⡻⣿⣿⢸⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠸⢻⡏⠻⠦⠭⢼⣿⡇⠘⣿⠷⠮⠥⠟⠃⢸⣿⠃⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀⠀⠀⣼⣯⣇⠀⣷⣤⡄⣀⠤⣤⣾⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣦⣶⣿⣯⣩⢿⠀⢈⣼⣿⣿⣿⣾⣿⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢹⣿⡄⢷⡀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣛⣻⣻⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⣿⣿⣆⠻⣆⠀⠀⠀⠀⠀⠻⣿⣯⣿⣯⣧⡇⣿⣿⡋⣸⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠛⠿⣧⡴⡴⠶⠒⠛⢻⣿⣟⠻⣯⣭⣽⠟⣡⣿⣿⠀⠀⠀⠀⠤⣄⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⢿⣷⣿⣿⣶⣿⣿⢫⣿⣤⣄⠀⠀⠀⠀⠉⠳⣄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣴⠁⠀⠀⠀⠀⣠⠖⠊⠉⠈⢻⡇⢹⣿⣿⣿⣿⡿⣸⣿⠀⠀⠙⣆⠀⠀⠀⠀⠘⡆
⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⠀⠀⠀⠀⠳⢤⣀⣀⡠⠼⣿⡈⣿⡏⣿⣿⣇⣻⡟⠲⠦⠴⠃⠀⠀⠀⢀⣼⡿
⠀⠀⠀⠀⠀⠀⠀⠀⣯⠳⣤⣀⠀⠀⠀⠀⠈⠉⠀⠀⠹⠿⠿⠷⠿⠟⠛⠛⠃⠀⠀⠀⣀⣠⠤⠞⣫⣾⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠈⣷⣤⣍⡛⠒⠲⠤⣤⣤⣤⣀⣀⣠⣤⣄⣤⣤⣤⠴⠶⠒⠒⢋⣩⡥⠖⠋⣿⠏⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡄⠉⠉⠓⠒⠶⠶⠦⠤⠤⣤⡤⠴⠶⠶⠶⠖⠒⠉⠉⠁⠀⠀⠐⣾⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⣠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⠋⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠟⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⢶⣄⡀⠀⠀⠀⠀⠀⢀⣠⡴⠾⡅⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠈⠉⠛⠿⠿⠿⠛⠉⠁⠀⠀⢻⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠛⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠦⣤⣂⡂⣀⡨⠥⠶⠖⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀"; 
    let counter = 1;

    console.log("🚀 Spam sequence initiated...");

    while (true) {
        try {
            await fetch(url, {
                method: "POST",
                mode: "no-cors", 
                body: new URLSearchParams({ "message": `${messageBase} #${counter}` })
            });
            console.log(`✅ Automated Sent: ${messageBase} #${counter}`);
            counter++;
        } catch (error) {
            console.error("❌ Post failed:", error);
        }
        await new Promise(res => setTimeout(res, 2000));
    }
})();

/**
 * 2. DOM ELEMENTS
 */
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
const dot = document.querySelector('.second'); // <--- CHECK THIS EXISTS IN HTML

let drivingTimeout;
let speedInterval;  
let speed = 0;

/**
 * 3. LOGIC WITH SAFETY CHECKS
 */

// Only add the dot listener if the element actually exists
if (dot) {
    dot.addEventListener('click', amIACar);
}

function amIACar () {
    dot.textContent = "do i look like a car??";
}

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

function scheduleDriving() {
    if (drivingTimeout) clearTimeout(drivingTimeout);
    let overlapTime = 0.5;
    let timeout = Math.max((audio.duration - overlapTime) * 1000, 0);
    drivingTimeout = setTimeout(drivingCar, timeout);
}

if (car && leftTyre && rightTyre) {
    car.addEventListener('click', drivingCar);
    car.addEventListener('animationend', stopDriving);
}

function drivingCar() {
    car.classList.add('driveby');
    leftTyre.classList.add('tyrespin');
    rightTyre.classList.add('tyrespin');
    secondAudio.play();

    if (speedInterval) clearInterval(speedInterval);
    speed = 0;
    speedInterval = setInterval(function() {
        speed += 9;
        if (speed > 300) speed = 300;
        if (speedElement) speedElement.textContent = speed + ' km/h';
    }, 100);
}

function stopDriving() {
    car.classList.remove('driveby');
    leftTyre.classList.remove('tyrespin');
    rightTyre.classList.remove('tyrespin');
    if (dot) dot.classList.add('clicked');
    if (speedInterval) clearInterval(speedInterval);
    speed = 0;
    if (speedElement) speedElement.textContent = speed + ' km/h';
}

if (navtyre) {
    navtyre.addEventListener('click', navTyre);
    navtyre.addEventListener('animationend', () => navtyre.classList.remove('rotateme'));
    if (menudrawer) navtyre.addEventListener('click', menuDrawer);
}

function navTyre() {
    navtyre.classList.add('rotateme');
}

function menuDrawer() {
    menudrawer.classList.toggle('open');
    menudrawer.classList.toggle('closed');
    tireAudio.play();
}