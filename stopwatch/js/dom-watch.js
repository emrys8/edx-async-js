const
  watch = document.getElementById('watch'),

  // buttons
  start = document.getElementById('start'),
  reset = document.getElementById('reset'),
  record = document.getElementById('record'),

  // time record container
  timeList = document.getElementById('time-list');

function clearTimeRecords() {
    timeList.innerHTML = '';
}

function writeTimeToDOM(time) {
    watch.innerHTML = time;
}

function writeTRecordsToDOM(time) {
    const li = document.createElement('li');
    li.textContent = time;
    timeList.appendChild(li);
}

function roundTime(time, dp=2) { // d.p = decimal places
    time = time.toFixed(2);
    return time;
}

start.addEventListener('click', () => {
    if (stopwatch.started === false) {
        stopwatch.startTimer();
    } else {
        stopwatch.stopTimer();
    }
});

reset.addEventListener('click', () => {
    stopwatch.resetTimer();
});

record.addEventListener('click', () => {
    stopwatch.recordTime();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 's') {
        if (stopwatch.started) {
            stopwatch.stopTimer();
        } else {
            stopwatch.startTimer();
        }
    } else if (event.key === 'r') {
        stopwatch.resetTimer();
    } else if (event.key === 't') {
        stopwatch.recordTime();
    }
});