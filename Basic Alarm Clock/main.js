//Declare the variables
var timer = document.getElementById('timer');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var ampm = document.getElementById('ampm');
var startstop = document.getElementById('startstop');

var currentTime;
var alarmElement;
var activeAlarm = false;
var sound = new Audio('alarm.mp3');
sound.loop = true; //rings the alarm until it is stopped


//Show the current time
function showTime() {
    //declare the date object the show the current time
    var now = new Date();
    //save it in the currentTime variable
    currentTime = now.toLocaleTimeString();

    //condition to trigger the alarm
    //if the currentTime is the same as the alarm set
    if(currentTime === alarmElement) {
        //play the alarm sound
        sound.play();
        console.log("Time's up")
    }
    //display it
    timer.textContent = currentTime;
    setTimeout(showTime, 1000);
}
showTime();

//Add the numbers to the minutes and seconds option list
function addMinSec(id) {
 var select = id;
 var min = 59;

 for(i = 0; i <= min; i++){
    
    //when i less than 10 and it's true, put a 0 at the left side of the number and concat it with that number else just show the number
    //get the length of the options for minutes(59), set it to a new option object
    //when the number less than 10 put a 0 before it else display the number
    
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);

 }
}

addMinSec(seconds);
addMinSec(minutes);


//Add the numbers to the hour option dropdown list

function addHour(id) {
    var select = id;
    var min = 12;
   
    for(i = 0; i <= min; i++){

       select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
   
    }
}

addHour(hours);


//When ever the alarm button is clicked along with the selected numbers, save it in a variable and compare it with
// the current time


startstop.onclick = function() {
    //if an alarm has been set, disabled the options 
    if(activeAlarm === false) {
        hours.disabled = true;
        minutes.disabled = true;
        seconds.disabled = true;
        ampm.disabled = true;
    
        alarmElement = hours.value + ":" + minutes.value + ":" + seconds.value + ":" + ampm.value;
        
        //change the text of the set alarm button to clear alarm
        //the word this here points to the parent which is the button
        this.textContent = 'Clear Alarm';
        activeAlarm = true;


    }else{
        hours.disabled = false;
        minutes.disabled = false;
        seconds.disabled = false;
        ampm.disabled = false;

        sound.pause();
        this.textContent = 'Set Alarm'; 
        activeAlarm = false;

    }

}
