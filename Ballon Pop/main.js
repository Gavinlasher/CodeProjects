let Startbutton = document.getElementById("start-button")
let Inflatebutton = document.getElementById("inflate-button")


//#region  Game Logic and data




// DATA

let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxsize = 300
let highestpopcount = 0
let currentpopcount = 0
let gamelength = 5000
let clckid = 0
let timeRemaining = 0
let currentPlayer = {}


 

function startgame(){
Startbutton.setAttribute("disable", "true")
Inflatebutton.removeAttribute("disabled")
startclock()
 setTimeout( stopgame , gamelength)

}


function startclock(){
timeRemaining = gamelength
clockid = setInterval(drawclock, 1000)
}
function stopclock(){
  clearInterval(clockid)
}

function inflate(){
  clickCount++
  height+= inflationRate
  width += inflationRate
  if(height >= maxsize){
    console.log("pop the ballon")
    currentpopcount++
    height = 0
    width = 0
  }
  
  draw()
  
}

function drawclock(){
let countdownElm=  document.getElementById("countdown")
countdownElm.innerText = (timeRemaining / 1000)
timeRemaining -= 1000
}

function draw(){
  let balloonElement = document.getElementById("balloon")
  let clickCountElem = document.getElementById("click-count")
 let popcountElem = document.getElementById("pop-count")
 let highpopcountElem = document.getElementById("high-score")
 let playerNameElem = document.getElementById("player-name")

 
  balloonElement.style.height = height + "px"
  balloonElement.style.width = width + "px"
  

  clickCountElem.innerText = clickCount
  popcountElem.innerText = currentpopcount
 highpopcountElem.innerText = currentPlayer.highscore

 playerNameElem.innerText = currentPlayer.name
 }

 function stopgame(){
  console.log("GAME OVER")

  Inflatebutton.setAttribute("disabled", "true")
  Startbutton.removeAttribute("disabled")

clickCount= 0
height= 120
width= 100

if(currentpopcount > currentPlayer.highscore){
  currentPlayer.highscore = currentpopcount
  savePlayers()
}
currentpopcount = 0

stopclock()
draw()

 }

 // //#endregionendregion

 let players =[]
 loadPlayers()

 function setPlayer(event){
event.preventDefault()
let form = event.target

let playerName = form.playerName.value

 currentPlayer = players.find(player => player.name == playerName)

if(!currentPlayer){
  currentPlayer = {name: playerName,highscore: 0}
  players.push(currentPlayer)
  savePlayers()
}






form.reset()
document.getElementById("game").classList.remove("hidden")
form.classList.add("hidden")

draw()
 }
 function changePlayer(){
  document.getElementById("player-form").classList.remove("hidden")
document.getElementById("game").classList.add("hidden")
 }
 function savePlayers(){
   window.localStorage.setItem("players",JSON.stringify(players))
 }
 function loadPlayers(){
   let playersData = JSON.parse(window.localStorage.getItem("players"))
   if(!playersData){
     players= []
   }else{
     players = playersData
   }
  
 }