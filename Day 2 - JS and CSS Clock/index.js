let second = document.querySelector('.second');
let minute = document.querySelector('.minute');
let hour = document.querySelector('.hour');

function setDate() {
    let current = new Date();

    let seconds = current.getSeconds();
    let secDeg = ((seconds / 60) * 360) + 90;
    second.style.transform = `rotate(${secDeg}deg)`;

    let minutes = current.getMinutes();
    let minDeg = ((minutes / 60) * 360) + ((seconds / 60)*6) + 90;
    minute.style.transform = `rotate(${minDeg}deg)`;

    let hour = current.getHours();
    let hourDeg = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
    hour.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
setDate();