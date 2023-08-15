var startButton = document.querySelector(".start-button");

startButton.addEventListener("click", startGame);

// function init(){

// }

function startGame(){

}

function timer(){
    var seconds = 60;
    var timer = setInterval (function(){
        document.getElementsByClassName("timer").innerHTML = seconds;
        sec--;
        if(sec < 0) {
            clearInterval(timer);
        }
    }, 1000)
}
function timer()