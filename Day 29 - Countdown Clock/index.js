let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const timerEndDisplay = document.querySelector('.display__end-time');
const btns = document.querySelectorAll('[data-time]');


function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(function() {
        const secsLeft = Math.round((then - Date.now()) / 1000);
        if(secsLeft < 0) {
            clearInterval(countdown);
        }

        displayTimeLeft(secsLeft);
    }, 1000)
}

function displayTimeLeft(secs) {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    const display = `${mins < 10 ? '0' : ''}${mins}:${remainderSecs < 10 ? '0' : ''}${remainderSecs}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const mins = end.getMinutes();
    const hourFormat = hour > 12 ? hour - 12 : hour;
    timerEndDisplay.textContent = `Be Back At ${hourFormat < 10 ? '0' : ''}${hourFormat}:${mins < 10 ? '0' : ''}${mins}`;
}

function startTimer() {
    const secs = Number(this.dataset.time);
    timer(secs);
}

function stop() {
    clearInterval(countdown);
    timerEndDisplay.textContent = `00:00`;
}

btns.forEach(btn => btn.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})
