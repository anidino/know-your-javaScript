// ARRAY OF QUESTIONS AND POSSIBLE ANSWERS (array within array) TO CHOOSE FROM. CORRECT ANSWER IS ALSO STORED HERE. 
var questions = [
    {
        questionPrompt: "What do we call mixed data contained within brackets?",
        options: [
            "function",
            "array",
            "API",
            "arguement"],
        theAnswer: "array",
    },
    {
        questionPrompt: "Is Jquery needed to write code in JavaScript?",
        options: [
            "Yes",
            "No",
            "Sometimes",
            "Unsure"],
        theAnswer: "No",
    },
    {
        questionPrompt: "What is something that passes data into a function?",
        options: [
            "arguement",
            "bootstrap",
            "jquery",
            "pseudocode"],
        theAnswer: "arguement",
    },
    {
        questionPrompt: "What do we call a plain language description to help developers organize thoughts and plan before writing any actual code?",
        options: [
            "function",
            "method",
            "pseudocode",
            "EventListener"],
        theAnswer: "pseudocode",
    },
    {
        questionPrompt: "What does || mean in JavaScript?",
        options: [
            "and",
            "else if",
            "else",
            "or"],
        theAnswer: "or",
    },
];

// STARTING VARIABLES 
var currentQuestion;
var correctAnswer;
var questionLength = questions.length;
var questionNum;


// GRAB HTML ELEMENTS USING GETELEMENTBYID AND TARGETTING THE HTML ID IN ("")
var homePage = document.getElementById("startPage");
var startButton = document.getElementById("startButton");
var quizEl = document.getElementById("quiz");
var questionStat = document.getElementById("questionStat");
var userStats = document.getElementById("lastPage");
var tryAgainEl = document.getElementById("tryAgain");


// this starts the timer if the user clicks the start button. When timer reaches 0, user is alerted
function clock() {
    var myTimer = setInterval(myClock, 1000);
    var sec = 15;

    function myClock() {
        document.getElementById("startButton").innerHTML = --sec;
        if (sec == 0) {
            clearInterval(myTimer);
            alert("Time is up but keep trying!");
        }
    }
}


// WHEN THE START BUTTON IS CLICKED, BEGIN THE GAME AND PREVENT THE DEFAULT BEHAVIOR OF START BUTTON 
startButton.addEventListener("click", function (e) {
    e.preventDefault();
    startQuiz();
});


//FUNCTION TO START GAME. VARIABLES SET TO A DISPLAY OF NONE WILL NOT APPEAR AT THIS STAGE. 
function startQuiz() {
    homePage.style.display = "none";
    quizEl.style.display = "block";
    questionStat.style.display = "block";
    userStats.style.display = "none";
    tryAgainEl.style.display = "none";
    questionNum = 0;
    correctAnswer = 0;
    showQuestion();
}
// FUNCTION THAT CLEARS OUT THIS SECTION SO IT IS NOW EMPTY 
function clearSection() {
    quizEl.innerHTML = "";
}
// FUNCTION TO DISPLAY QUESTION TO USER IN WHAT WAS OUR EMPTY CONTAINER 
function showQuestion() {
    clearSection();
    currentQuestion = questions[questionNum];
    var pos = questionNum + 1;
    questionStat.textContent = "Question: " + pos + "/" + questionLength;
    var question = document.createElement("h2");
    question.textContent = currentQuestion.questionPrompt;
    quizEl.appendChild(question);
    showQuestionOptions();
}
// DISPLAY QUESTION CHOICES AND FOR LOOP TO GO THROUGH ARRAY OF QUESTIONS AND ANSWER OPTIONS 
function showQuestionOptions() {
    for (let i = 0; i < currentQuestion.options.length; i++) {
        var choice = document.createElement("h4");
        choice.setAttribute("class", "choiceBG");
        choice.setAttribute("data-value", currentQuestion.options[i]);
        choice.textContent = currentQuestion.options[i];
        quizEl.appendChild(choice);
    }
}
// EXECUTES FUNCTION ON CLICK, PREVENTS DEFAULT BEHAVIOR AND COMPARES ANSWERS 
quizEl.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.matches("h4")) {
        var userAnswer = e.target.getAttribute("data-value");
        compare(userAnswer);
    }
});
// FUNCTION TO COMPARE USER ANSWERS. ALSO, IF USER CHOOSES THE CORRECT ANSWER, ADD IT TO THEIR # OF CORRECT ANSWERS 
function compare(userAnswer) {
    if (userAnswer === currentQuestion.theAnswer) {
        correctAnswer++;
        questionNum++;
        tryAgainorNot();
    } else {
        questionNum++;
        tryAgainorNot();
    }
}
// IF ALL THE QUESTIONS ARE UP, DISPLAY THE STATS/RESULTS. OTHERWISE, GIVE THE NEXT QUESTION 
function tryAgainorNot() {
    if (questionNum === questionLength) {
        showScore();
    } else {
        showQuestion();
    }
}
// FUNCTION TO SHOW USER SCORE AT END OF GAME. ANYTHING SET TO A DISPLAY OF NONE WILL NOT APPEAR AT THIS TIME 
function showScore() {
    quizEl.style.display = "none";
    questionStat.style.display = "none";
    userStats.style.display = "block";
    tryAgainEl.style.display = "block";
    userStats.innerHTML = "";
    var h2 = document.createElement(h2);
    h2.textContent = "You Got " + correctAnswer + " out of " + questionLength;
    userStats.appendChild(h2);
    // CONSOLE LOG USER SCORE AND TRY TO STORE THEM IN LOCAL STORE (LOCAL STORAGE COMMENTED OUT BC I DID NOT GET IT TO WORK YET)
    console.log(userStats);
    // localStorage.setItem("highScore", "userStats");
    // document.getElementById("highScore").innerHTML = localStorage.getItem("userStats");
}
// EVENT LISTENER LISTENING FOR CLICK ON TRY AGAIN BUTTON. IF USER CLICKS TRY AGAIN, QUIZ RESTARTS 
tryAgainEl.addEventListener("click", function (e) {
    e.preventDefault();
    startQuiz();
});

var userScore = Number.userStats;





























































// var startScreen = document.getElementById("gameStart");
// var startSelected = document.getElementById("start");
// var currentQuestion = document.getElementById("questionNumber");
// var playerChoices = document.getElementById("choices");
// var gameWrapUp = document.getElementById("endOfGame");
//correct answer counter
// var playerScore = 0;
// console.log("Hello")
//Array of objects containing questions
//and possible answers
// var questions = [
//     {
//         q: "Question to be answered with three listed choices",
//         a: "answer", b: "answer", c: "answer",
//         correct: "answermatch"
//     },
//     {},
//     {},
//     {},
//     {},
//     {},
//     {},
//     {},
//     {},
//     {}
// ];
// var playTheGame = function () {
//     currentQuestion.style.display = "none";
//     document.getElementById("start").addEventListener("click", function (event) {
//         event.preventDefault();
//         displayQuestion();
//     }
//     )
// }
// playTheGame();
//Display Question
//How the questions and answers will be
//presented to the user.
//
// var displayQuestion = function () {
//     startScreen.style.display = "none";
//     currentQuestion.style.display = "block";
// };
//Function to display questions and
//choices to the screen
//
// var nextQuestion = function () {
//     if (questions[i] < questions.length) {
//         i++;
//         return displayQuestion();
//     } else {
//         return gameOver();
//     }
// };
//Game Over
//Will display the game over screen which will
//detail the users score and allow for input
//of their initials to local storage
//
// var gameOver = function () {
// };
// var questionTimer = function () {
//     setTimeout(outOfTime, 10000);
// };
































































































































