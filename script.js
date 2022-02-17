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
  window.addEventListener("keydown", function(e){
    event.stopPropagation();
    var code = e.keyCode;
     if(code == 32){
      addTime();   
     }}) ;
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
    if(timeRemaining <= 0) {

      clearInterval(timeInterval);
      mainEl.textContent = 'Run Complete';
      return;
    }
  },1000);
  
}

function addTime(){
  newTime = timeRemaining + 300;
  timeRemaining = newTime;
}

var startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click',countdown);

var bladesBtn = document.getElementById('violetblades');
var masksBtn = document.getElementById('redmasks');
var wingsBtn = document.getElementById('goldwings');
var headerEl = document.getElementById('header');
var timerBtn = document.getElementById('generate');

bladesBtn.addEventListener('click',bladesify);
masksBtn.addEventListener('click',masksify);
wingsBtn.addEventListener('click',wingsify);

function bladesify(){
  headerEl.classList.toggle('bladesTheme');
  startBtn.classList.toggle('bladesTheme');
  timerBtn.classList.toggle('bladesTheme');
  headerEl.classList.remove('wingsTheme');
  headerEl.classList.remove('masksTheme');
  startBtn.classList.remove('wingsTheme');
  startBtn.classList.remove('masksTheme');
  timerBtn.classList.remove('masksTheme');
  timerBtn.classList.remove('wingsTheme');
};

function wingsify(){
  headerEl.classList.toggle('wingsTheme');
  startBtn.classList.toggle('wingsTheme');
  timerBtn.classList.toggle('wingsTheme');
  headerEl.classList.remove('bladesTheme');
  headerEl.classList.remove('masksTheme');
  startBtn.classList.remove('bladesTheme');
  startBtn.classList.remove('masksTheme');
  timerBtn.classList.remove('bladesTheme');
  timerBtn.classList.remove('masksTheme');
};

function masksify(){
  headerEl.classList.toggle('masksTheme');
  startBtn.classList.toggle('masksTheme');
  timerBtn.classList.toggle('masksTheme');
  headerEl.classList.remove('wingsTheme');
  headerEl.classList.remove('bladesTheme');
  startBtn.classList.remove('bladesTheme');
  startBtn.classList.remove('wingsTheme');
  timerBtn.classList.remove('bladesTheme');
  timerBtn.classList.remove('wingsTheme');
};

function keydownStart(){
window.addEventListener("keydown", function(e){
  event.stopPropagation();
  var code = e.keyCode;
   if(code == 16){
    countdown();   
   }})} ;

keydownStart();   

