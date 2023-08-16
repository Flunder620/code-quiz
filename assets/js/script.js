var startButton = document.querySelector(".start-button");
var questionTitle = document.querySelector(".question-title")
var questionChoice = document.querySelector(".question-choices")
var quizQuestions = document.querySelector(".quiz-questions")
var initalsQuestions = document.querySelector(".initals-question")
var currentQuestion = 0
var seconds = 60;

startButton.addEventListener("click", startGame);
//list of questions
var questions =[
    {
        title:"What does HTML stand for?",
        choices:["HyperText Markup Language", "HyperText Markdown Language", "HyperText Market Language"],
        answer:"HyperText Markup Language"
    },
    {
        title:"Waht does CSS stand for?",
        choices:["test a", "test b", "test c"],
        answer:"test b"
    },
    {
        title:"How do you add jQuery?",
        choices:["test a", "test b", "test c"],
        answer:"test c"
    }
]
//validates if answerr is correct 
function checkAnswer(){
    console.log(this.dataset.value)
    if(this.dataset.value ===questions[currentQuestion].answer){
        currentQuestion++;
        
    }
    else{
        seconds = seconds-10
    }
    if(seconds <= 0 || currentQuestion === questions.length){
        endGame()
    }
    renderQuestions()
}
//ends the game
function endGame(){
    console.log("End Game")
    initalsQuestions.classList.remove("hide")
    quizQuestions.classList.add("hide")

}
//displays questions
function renderQuestions(){
    questionTitle.textContent = questions[currentQuestion].title
    questionChoice.textContent = ""
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        var button = document.createElement("button")
        button.textContent = questions[currentQuestion].choices[i]
        button.setAttribute("data-value", questions[currentQuestion].choices[i])
        console.log(button)
        button.addEventListener("click", checkAnswer)
        questionChoice.appendChild(button)
    }
}
//begins the gmae
function startGame(){
    timer()
    renderQuestions()
}
//timer 
function timer(){

    var timer = setInterval (function(){
        document.querySelector(".timer").innerHTML =" Time Remaining: " + seconds;
        seconds--;
        if(seconds < 0) {
            clearInterval(timer);
        }
    }, 1000)
}
