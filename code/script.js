const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const choicesList = document.getElementById("choices-list");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const initialsInput = document.getElementById("initials");
const saveButton = document.getElementById("save-button");

let currentQuestionIndex = 0;
let score = 0;
let timer;
const quizQuestions = [
    {
        question: "Javascript is a _____",
        choices: ["a. Programming language", "b. Markup Language"],
        correctAnswer: 0
    },
    {
        question: "What is an array in JavaScript?",
        choices: ["a. Type of global object that is used to store data.", "b. Type of styling"],
        correctAnswer: 0
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        choices: ["a. <javascript>", "b. <js>", "c. <script>"],
        correctAnswer: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["a. function = myFunction", "b. function myFunction ()"],
        correctAnswer: 1
    },
    {
        question: "JavaScript is the same as Java?",
        choices: ["a. True", "b. False"],
        correctAnswer: 1
    }
];
function startQuiz() {
    startButton.style.display= "none";
    questionContainer.style.display= "block";
    displayQuestion(currentQuestionIndex);
    startTimer();
}
//quiz time limit //
function startTimer() {
    let secondsLeft = 60; 
    timer = setInterval(function(){
        if (secondsLeft <= 0) {
            endQuiz();
        } else {
            document.getElementById("timer").textContent = secondsLeft;
            secondsLeft--;
        }
    } , 1000);
}

function displayQuestion(index) {
    if (index < quizQuestions.length) {
        const question = quizQuestions[index];
        questionText.textContent = question.question;
        choicesList.innerHTML = "";
        
        question.choices.forEach((choice, i) => {
            const li = document.createElement("li");
            li.textContent = choice;
            li.addEventListener("click", () => checkAnswer(i, question.correctAnswer));
            choicesList.appendChild(li);
        });
        
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        score+=100;

    } else {

    }
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);

}

function endQuiz() {
    clearInterval(timer);
    questionContainer.style.display = "none";
resultContainer.style.display = "block";
scoreElement.textContent=score;
}

startButton.addEventListener("click" , startQuiz);