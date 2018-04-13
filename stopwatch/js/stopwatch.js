let
  elapsedTime = 0,
  started = false,
  intervalID;

const
  timer = document.getElementById("timer"),
  startBtn = document.getElementById("startStopBtn"),
  resetBtn = document.getElementById("resetBtn"),
  recordBtn = document.getElementById("recordBtn"),
  timeRecords = document.getElementById("time-records");

// Registered Events
startBtn.addEventListener('click', function() {
    if (started === false) {
        startTimer();
    } else {
        stopTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);
recordBtn.addEventListener('click', recordTime);

document.addEventListener('keydown', (event) => {
    if (event.key === 's') {
        if (started === false) {
            startTimer();
        } else {
            stopTimer();
        }
    } else if (event.key === 't') {
        recordTime();
    } else if (event.key === 'r') {
        resetTimer();
    }
});

/**
 * @param {}
 * @return 
 * Starts the stopwatch, and updates the watch DOM, every 
 * 0.5s
 */
function startTimer() {

    intervalID = setInterval(() => {
        elapsedTime += 0.01;
        timer.innerHTML = roundTime(elapsedTime);
    }, 100);

    started = true;
}

/**
 * @function stopTimer
 * @param {}
 * @return 
 * Stops the stopwatch
 */
function stopTimer() {
    clearInterval(intervalID);
    started = false;
}

/**
 * @function resetTimer
 * @param {}
 * @return
 * Resets the stopwatch to 0 and updates the DOM accordingly
 */
function resetTimer() {
    clearInterval(intervalID);
    elapsedTime = 0;
    timer.innerHTML = elapsedTime;
    started = false;
    clearTimeRecords();
}

/**
 * @function recordTime
 * @param {}
 * @return
 * Records the current Elapsed time and updates the DOM accordingly
 */
function recordTime() {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(roundTime(elapsedTime)));
    timeRecords.appendChild(li);
}

/**
 * @function clearTimeRecords
 * @param {}
 * @return
 * Clears the recorded times
 */
function clearTimeRecords() {
    timeRecords.innerHTML = '';
}

/**
 * @function roundTime
 * @param {Number} time 
 * @param {Number} dp
 * @return {Number}
 */
function roundTime(time, dp=2) { // d.p = decimal places
    time = time.toFixed(dp);
    return time;
}