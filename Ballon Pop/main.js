let Startbutton = document.getElementById("start-button")
let Inflatebutton = document.getElementById("inflate-button")
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
 
  balloonElement.style.height = height + "px"
  balloonElement.style.width = width + "px"
  

  clickCountElem.innerText = clickCount
  popcountElem.innerText = currentpopcount
 highpopcountElem.innerText = highestpopcount
 }

 function stopgame(){
  console.log("GAME OVER")

  Inflatebutton.setAttribute("disabled", "true")
  Startbutton.removeAttribute("disabled")

clickCount= 0
height= 120
width= 100

if(currentpopcount > highestpopcount){
  highestpopcount = currentpopcount
}
currentpopcount = 0

stopclock()
draw()

 }