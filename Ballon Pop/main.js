let startbutton = document.getElementById("start-button")

let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxsize = 300
let popcount = 0

function startgame(){
 setTimeout(()=>{
  console.log("its been three seconds")
 }, 3000)

}

function inflate(){
  clickCount++
let balloonElement = document.getElementById("balloon")
height+= inflationRate
width += inflationRate
if(height >= maxsize){
  console.log("pop the ballon")
  popcount++
  height = 0
  width = 0
  document.getElementById("pop-count").innerText = popcount
}
balloonElement.style.height = height + "px"
balloonElement.style.width = width + "px"



let clickCountElem = document.getElementById("click-count")
clickCountElem.innerText = clickCount
}

 
