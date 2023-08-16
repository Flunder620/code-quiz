var startButton = document.querySelector(".start-button");
var questionTitle = document.querySelector(".question-title")
var questionChoice = document.querySelector(".question-choices")
var quizQuestions = document.querySelector(".quiz-questions")
var initalsQuestions = document.querySelector(".initals-question")
var currentQuestion = 0
var seconds = 60;

startButton.addEventListener("click", startGame);

var questions =[
    {
        title:"HTML",
        choices:["test a", "test b", "test c"],
        answer:"test a"
    },
    {
        title:"HTML 2",
        choices:["test a", "test b", "test c"],
        answer:"test b"
    },
    {
        title:"HTML 3",
        choices:["test a", "test b", "test c"],
        answer:"test c"
    }
]

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

function endGame(){
    console.log("End Game")
    initalsQuestions.classList.remove("hide")
    quizQuestions.classList.add("hide")

}

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

function startGame(){
    timer()
    renderQuestions()
}

function timer(){

    var timer = setInterval (function(){
        document.querySelector(".timer").innerHTML =" Time Remaining: " + seconds;
        seconds--;
        if(seconds < 0) {
            clearInterval(timer);
        }
    }, 1000)
}
