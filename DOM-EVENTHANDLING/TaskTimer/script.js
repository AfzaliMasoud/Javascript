const input = document.getElementById("taskinput");
const timer = document.getElementById("hour");
const minutter = document.getElementById("minutes");
const sekunder = document.getElementById("seconds");
const knapp = document.getElementById("addbutton");
const visningtask = document.getElementById("taskdisplay");
const visningtimer = document.getElementById("timedisplay");
const stopButton = document.getElementById("stop-button");
const resumeButton = document.getElementById("resume-button");

let countdown;
let totaltimesec;
let isPaused = false;

knapp.addEventListener("click", function() {
    visningtask.textContent = input.value;

    let hours = parseInt(timer.value) || 0;
    let minutes = parseInt(minutter.value) || 0;
    let seconds = parseInt(sekunder.value) || 0;

    totaltimesec = (hours * 3600) + (minutes * 60) + seconds;

    startCountdown();
});

function startCountdown() {
    clearInterval(countdown);
    countdown = setInterval(() => {
        if (totaltimesec <= 0) {
            clearInterval(countdown);
            visningtimer.textContent = "00:00:00";
            return;
        }

        if (!isPaused) {
            totaltimesec--;

            const displayHours = Math.floor(totaltimesec / 3600);
            const displayMinutes = Math.floor((totaltimesec % 3600) / 60);
            const displaySeconds = totaltimesec % 60;

            visningtimer.textContent = 
                String(displayHours).padStart(2, '0') + ":" +
                String(displayMinutes).padStart(2, '0') + ":" +
                String(displaySeconds).padStart(2, '0');
        }
    }, 1000);
}

stopButton.addEventListener("click", function() {
    isPaused = true;
});

resumeButton.addEventListener("click", function() {
    isPaused = false;
});
