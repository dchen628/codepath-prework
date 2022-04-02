//Global Constants
//const clueHoldTime = 1000; how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var pattern = []; //3, 4, 5, 1, 6, 5, 2, 1
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistake;
var Timer;
var Interval; //name for setInterval

function startGame(){
    //initialize game variables
    clueHoldTime = 1000; //how long to hold each clue's light/sound
    progress = 0;
    mistake = 0; //initialize
    Timer = 25;
    while(pattern.length!=8) //push in 8 random number
    {
        pattern.push(Math.floor(Math.random() * 5)+1); //function gives 0-5 but we need 1-6 so + 1
    }
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("clock").classList.remove("hidden"); //show timer
    playClueSequence();
    Interval = setInterval(displayTime, 1000);
}

function stopGame(){
    gamePlaying = false;
    clearInterval(Interval);
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    while(pattern.length > 0)
    {
      pattern.pop();
    }
    document.getElementById("strike1").classList.add("hidden");
    document.getElementById("strike2").classList.add("hidden");
    document.getElementById("clock").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 420,
  5: 475.6,
  6: 490
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= 100;
}

function loseGame(){
  stopGame();
  alert("Game Over. You Lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function displayTime(){
    if(Timer == -1)
    {
      loseGame();
    }
    document.getElementById("clock").innerHTML = Timer;
    Timer--;
  }

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if(btn == pattern[guessCounter])
  {
    if(guessCounter != progress)
    {
      guessCounter++;
    }
    else
    {
      progress++;
      playClueSequence();
      Timer = 25;
    }
     if(progress == 8)
    {
      winGame();
    }
  }
  else
  {
    mistake++;
    if(mistake == 1)
    {
      document.getElementById("strike1").classList.remove("hidden");
    }
    if(mistake == 2)
    {
      document.getElementById("strike2").classList.remove("hidden");
    }
  }
  if(mistake == 3)
  {
    loseGame();
  }
}