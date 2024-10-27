var timer = 60;
var score = 0;
var ranHit = 0;


function increaseScore(){
    score += 10
    document.querySelector('#scoreval').textContent=score
}

function getNewHit(){
   ranHit =  Math.floor(Math.random()*10)
   document.querySelector('#hitval').textContent = ranHit
}

function makeBubble(){
    var clutter = "";
for(var i=0; i<168; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerValue').textContent = timer
        }
        else{
            clearInterval(timerInt)
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over <\h1>`
        }
    }, 1000)
}

document.querySelector('#pbtm')
.addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent)
    if(ranHit === clickedNum ){
        increaseScore()
        makeBubble()
        getNewHit()
    }
})

getNewHit()
runTimer()
makeBubble()
