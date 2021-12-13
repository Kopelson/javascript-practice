//selectors 
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
//set countdown date
const countdownDate = new Date('December 25, 2021 00:00:00');


function countdownTimer(){
    //get current date
    const newDate = new Date;
    //get time difference 
    let milliseconds = countdownDate.getTime() - newDate.getTime();
    let seconds = milliseconds / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;

    // figure out days, set the day display, figure out the remainder of days
    let displayDays = Math.floor(days);
    day.innerHTML = displayDays;
    let remainderDays = days - displayDays;

    // figure out hours, set the hour display, figure out the remainder of hours
    let displayHours = Math.floor(remainderDays * 24);
    hour.innerHTML = displayHours;
    let remainderHours = (remainderDays * 24) - displayHours;

    // figure out minutes, set the minute display, figure out the remainder of minutes
    let displayMinutes = Math.floor(remainderHours * 60);
    min.innerHTML = displayMinutes;
    let remainderMinutes = (remainderHours * 60) - displayMinutes;

    //figure out seconds, set the seconds display
    let displaySeconds = Math.floor(remainderMinutes * 60);
    sec.innerHTML = displaySeconds;
}

//set countdown interval
setInterval(countdownTimer, 1000);
