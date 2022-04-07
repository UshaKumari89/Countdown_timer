const newYear = "1 jan 2023";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const totalSecondsEl = document.getElementById("seconds");
function countDown(){
    const newYearDate = new Date(newYear);
    const currentYear = new Date();
    const seconds = (newYearDate - currentYear)/1000;
    const days = Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/ 3600 )%24;
    const minutes = Math.floor(seconds/ 3600 )%60;
    const totalSeconds = Math.floor(seconds )%60;
    console.log(days,hours,minutes,totalSeconds);
    daysEl.innerHTML = days;
    hoursEl.innerHTML  = hours;
    minutesEl.innerHTML = minutes;
    totalSecondsEl.innerHTML = totalSeconds;



}
countDown();

