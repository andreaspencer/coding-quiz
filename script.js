var startButton = document.querySelector("#startButton");
var timerEl = document.querySelector("#timer");

var questionEl= document.querySelector("#question");
var b1El= document.querySelector("#b1");
var b2El= document.querySelector("#b2");
var b3El= document.querySelector("#b3");
var b4El= document.querySelector("#b4");

var introEl = document.querySelector("#intro");
var quizEl= document.querySelector("#quiz");

var questions = [
    {
        question: 'String values must be enclosed within:',
        choice1: "quotes", 
        choice2: "commas", 
        choice3: "curly brackets", 
        choice4: "paranthesis",
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript", 
        choice2:"terminal", 
        choice3:"alerts", 
        choice4:"console.log",
        answer: "console.log"
    },
    {
        question: "The condition in an if/else statement is enclosed within:",
        choice1:"quotes", 
        choice2:"curly brackets", 
        choice3:"paranthesis", 
        choice4:"square brackets",
        answer: "paranthesis"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "strings", 
        choice2:"alerts", 
        choice3:"booleance", 
        choice4:"numbers",
        answer: "alerts"
    },
    {
        question: "Arrays in Javascript can be used to store:",
        choice1:"numbers and strings", 
        choice2:"other arrays",
        choice3:"booleances", 
        choice4:"all of the above",
        answer: "all of the above"
    }
];

var userScore;
var secondsLeft = 60;
var questionIndex = 0;
var timeInterval;

function startTimer(){
    timeInterval = setInterval (
    function() {
        secondsLeft--;
        timerEl.textContent = 'Timer:' + secondsLeft;
        if (secondsLeft === 0) {
            userScore= 0;
            clearInterval(timeInterval);
            timerEl.textContent= "Times Up!";
            userScore = 0;
            enterHiSc();
        }
    }, 1000);
};

startButton.addEventListener("click", startQuiz);
function startQuiz() {
    userScore = 0;
    startTimer();
    quizEl.setAttribute("style", "display: block");
    loadQuestion();
};

function loadQuestion(){
    questionEl.textContent = questions[questionIndex].question;
    b1El.textContent= questions[questionIndex].choice1;
    b2El.textContent= questions[questionIndex].choice2;
    b3El.textContent= questions[questionIndex].choice3;
    b4El.textContent= questions[questionIndex].choice4;
};

var wrongEl = document.querySelector("#wrong");
quizEl.addEventListener("click", function () {
    var element = event.target;
    if(element.matches(".quizzes")) {
        var check = element.innerText;
        if (check === questions[questionIndex].answer) {
            secondsLeft = secondsLeft +5;
            wrongEl.textContent = "Correct!";
            var qLength= questions.length -1;
            if (questionIndex < qLength) {
                questionIndex ++;
                loadQuestion();
            } else {
                userScore = secondsleft;
                clearInterval(timeInterval);
                timerEl.textContent = "All Done";
                enterHiSc();
            }
        }else {
            secondsLeft = secondsLeft -5;
            wrongEl.textContent = "Incorrect - 5 seconds";
            if (secondsLeft <= 0) {
                userScore = 0;
                clearInterval(timeInterval);
                timerEl.textContent = "You ran out of time!";
                enterHiSc();
            }
        }
    }
});

function enterHiSc() {
    var intials = intialsEl.value.trim();
    if (intials !== '') {
        var highScore= JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newScore = {
            score: secondsLeft,
            intials: intials
        };

        highScore.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
    }
};

function checkForEnter() {
    if (event.key === "Enter") {
        saveHighScore();
    }
}

