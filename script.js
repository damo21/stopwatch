let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

let displayMiliseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let displayDays = 0;

let interval = null;
let stoppedStarted = "stopped";

function stopwatch() {
    miliseconds++;

    if (miliseconds / 100 === 1) {
        miliseconds = 0;
        seconds++;

        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;

            if (minutes / 60 === 1) {
                minutes = 0;
                hours++;

                if (hours / 60 === 1) {
                    hours = 0;
                    days++;
                }
            }
        }
    }
    if (miliseconds < 10) {
        displayMiliseconds = "0" + miliseconds.toString();
    } else {
        displayMiliseconds = miliseconds;
    }
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }
    if (days < 10) {
        displayDays = "0" + days.toString();
    } else {
        displayDays = days;
    }

    document.getElementById("display").innerHTML = displayDays + ":" + displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + displayMiliseconds;

}



function start() {
    if (stoppedStarted === "stopped") {

        interval = window.setInterval(stopwatch, 10);
        document.getElementById("stopStart").innerHTML = "Stop";
        stoppedStarted = "started";

    } else {

        window.clearInterval(interval);
        document.getElementById("stopStart").innerHTML = "Start";
        stoppedStarted = "stopped";
    }
}

function reset() {
    window.clearInterval(interval)
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    days = 0;
    stoppedStarted = "stopped";
    document.getElementById("display").innerHTML = "00:00:00:00:00";
    document.getElementById("stopStart").innerHTML = "Start";

}