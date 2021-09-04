var startButton = document.getElementById("#start-btn");
var nextQuestion = document.getElementById("#next-btn");
var answersButton = document.getElementById("#answer-button");
var questionContainerEl = document.getElementById("#questionsCon");
var questionElement = document.getElementById("#question");

var score = 0;

var questions = [
    {
        question: 'String values must be enclosed within:',
        choices: ["quotes", "commas", "curly brackets", "paranthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal", "alerts", "console.log"],
        answer: "console.log"
    },
    {
        question: "The condition in an if/else statement is enclosed within:",
        choices: ["quotes", "curly brackets", "paranthesis", "square brackets"],
        answer: "paranthesis"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "alerts", "booleance", "numbers"],
        answer: "alerts"
    },
    {
        question: "Arrays in Javascript can be used to store:",
        choices: ["numbers and strings", "other arrays", "booleances", "all of the above"],
        answer: "all of the above"
    }
];

function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function() {
        minutes= parseInt(timer / 60, 10);
        seconds = parseInt (timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer=duration;
        }
        if(seconds === 0) {
            alert('Game Over!')
        }
    }, 1000);
}

startButton.addEventListener("click", startQuiz ());
startButton.addEventListener("click", function() {
    var twoMinutes= 60 *2,
        display = document.querySelector("#time");
    startTimer(twoMinutes, display);
});

function startQuiz(){
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionContainerEl.classList.remove("hide");
    currentQuestionsIndex= 0;
    nextQuestion();
    nextButton.classList.remove('hide')
}

function showQuestion(questions){
    questionElement.innerText = questions.question
    console.log(questions)
    question.choices.forEach(choices => {
        button.innerText = choices.text
        button.classList.add('btn')
            if (answer) {
                button.dataset.answer= correct
            }
            button.addEventListener('click', answer)
            answersButtonElement.appendChild(button)
    });
}

startQuiz ();