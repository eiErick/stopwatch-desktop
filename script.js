const display = document.querySelector("#display");
const btnStartStop = document.querySelector("#btn-start-stop");
const btnReset = document.querySelector("#btn-reset");
const showHours = document.querySelector("#show-hours");
const showMinutes = document.querySelector("#show-minutes");

const soundPlay = new Audio('./sounds/play.wav');
const soundStop = new Audio('./sounds/pause.mp3');

let miliseconds = 0;
let seconds = 0 + "0";
let minutes = 0 + "0";
let hours = 0 + "0";

showTime();

btnStartStop.addEventListener("click", () => {
    btnStartStop.firstChild.nodeValue == "Stop" ? stopWatch() : startWatch();
});

btnReset.addEventListener("click", () => {
    miliseconds = 0;
    resetWatch();
    showTime();
});

function stopWatch() {
    intervaloId = clearInterval(intervaloId);
    btnStartStop.firstChild.nodeValue = "Start";
    soundStop.play();
}

function startWatch() {
    intervaloId = setInterval(count, 100);
    btnStartStop.firstChild.nodeValue = "Stop";
    soundPlay.play();
}

function resetWatch() {
    miliseconds = 0;
    seconds = 0 + "0";
    minutes = 0 + "0";
    hours = 0 + "0";

    showHours.innerHTML = "";
    showMinutes.innerHTML = "";
}

const count = () => {
    miliseconds++;
    showTime();
}

function showTime() {
    if (miliseconds == 10) transformSeconds();
    if (seconds == 60) transformMinutes();
    if (minutes == 60) transformHours();

    display.innerHTML = `${seconds}.${miliseconds}`;
}

function transformSeconds() {
    miliseconds = 0;
    seconds++;

    if (seconds < 10) seconds = "0" + seconds;
}

function transformMinutes() {
    seconds = 0 + "0";
    minutes++;

    if (minutes < 10) minutes = "0" + minutes;

    showMinutes.innerHTML = `${minutes}:`
}

function transformHours() {
    minutes = 0 + "0";
    hours++;

    if (hours < 10) hours = "0" + hours;
    
    showMinutes.innerHTML = `${minutes}:`
    showHours.innerHTML = `${hours}:`
}
