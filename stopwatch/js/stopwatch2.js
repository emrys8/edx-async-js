let 
  stopped = false,
  secs = 0,
  hours = 0,
  mins = 0;

// timer sections
const
   hour = document.getElementById('hour'),
   min = document.getElementById('min'),
   sec = document.getElementById('sec');

// buttons
const startBtn = document.getElementById('start');

startBtn.addEventListener('click', () => {
    setInterval(() => {

        // increment secs after 1second
        // if secs gets to 60, increment mins by 1, and bind 0 to secs
        // if mins becomes 60, increment hours by 1, and bind 0 to mins
        // 
        sec.textContent = secs++;
        if (secs === 60) {

            if (mins === 60) {
                mins = 0;
                hours++;
                hour.textContent = hours;
            }
            
            mins++;
            min.textContent = mins;
            secs = 0;
        }
    }, 100);
});