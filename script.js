var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('card-body');

function countdown() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    mainEl.textContent = timeLeft 
    
    if(timeLeft === 0) {

      clearInterval(timeInterval);
      runTimer();
    }
  
  }, 1000);
}

// Displays the message one second at a time
function runTimer() {
  var addTimeBtn = document.getElementById('generate');
  addTimeBtn.addEventListener('click', addTime);
  timeRemaining = 1200;
  var timeInterval = setInterval(function() {
    timeRemaining--;
    var minutes = Math.floor(timeRemaining/60);
    var seconds = Math.floor((timeRemaining % 60));
    if(seconds < 10){
      newSeconds = "0"+seconds;
      seconds = newSeconds;
    }
    mainEl.textContent = minutes+":"+seconds
    if(timeRemaining === 0) {

      clearInterval(timeInterval);
      mainEl.textContent = 'Run Complete';
    }
  },1000);
  
}

function addTime(){
  newTime = timeRemaining + 300;
  timeRemaining = newTime;
}

var startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click',countdown);
