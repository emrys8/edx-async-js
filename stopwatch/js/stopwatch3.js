const stopwatch = {

    started: false,
    timerIntervalId: 0,
    elapsedTime: 0,

    startTimer() {
        this.started = true;
        this.timerIntervalId = setInterval(() => {
            this.elapsedTime += 0.01;
            writeTimeToDOM(roundTime(this.elapsedTime));
        }, 100);
    },

    stopTimer() {
        this.started = false;
        clearInterval(this.timerIntervalId);
    },

    resetTimer() {
        this.elapsedTime = 0;
        this.started = false;
        clearInterval(this.timerIntervalId);
        writeTimeToDOM(this.elapsedTime);
        clearTimeRecords();
    },

    recordTime() {
        writeTRecordsToDOM(roundTime(this.elapsedTime));
    }
};