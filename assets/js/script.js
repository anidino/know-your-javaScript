var questions = [
    {
        question: "What is an array?",
        answers: {
            a: "mixed data contained within brackets",
            b: "an application that relies heavily on javaScript",
            c: "a newer javascript way of declaring a function",
            d: "a type of conditional statement",
            correct: "a",
        },
        // correctAnswer: "a"
    },
    {
        question: "What is the purpose of a for loop?",
        answers: {
            a: "It helps us know how to define variables",
            b: "It allows us to have the same operation done repetitively",
            c: "Similar to commenting, it can help web developers to better understand code later on",
            d: "It overwrites the function closest to it",
            correct: "b",
        },
        // correctAnswer: "b"
    },
    {
        question: "What does an arguement do?",
        answers: {
            a: "Catches and prevents any merge conflicts from happening",
            b: "Declares a function",
            c: "Runs the JS code before any HTML",
            d: "Passes data into a function",
            correct: "d",
        },
        // correctAnswer: "d"
    },
    {
        question: "What is pseudocode?",
        answers: {
            a: "a term frequently used for the finished, or working code",
            b: "a back-end programming language similar to JavaScript",
            c: "a plain language description to help developers organize thoughts and plan before writing any actual code",
            d: "a more user friendly way of writing JavaScript",
            correct: "c",
        },
        // correctAnswer: "c"
    },
    {
        question: "How can we write 'or' in JavaScript terms?",
        answers: {
            a: "||",
            b: "===",
            c: "&&",
            d: "//",
            correct: "a",
        },
        // correctAnswer: "a"
    },

];


var timer;

































































































































// // declare variables
// var score = 0;
// var userAnswer = "";
// var currentQuestion = 0;
// var questionMax = 5;
// var questionList = 0;
// var questionNumber = 0;


// // access HTML elements using getelementbyid 
// var mainContainer = document.getElementById("mainContainer");
// var headerEl = document.getElementById("header");
// var timerEl = document.getElementById("timer");
// var nextButtonEl = document.getElementById("nextButton");

// //questions array
// var questions = [
//     {
//         question: "What is an array?",
//         answers: {
//             a: "mixed data contained within brackets",
//             b: "an application that relies heavily on javaScript",
//             c: "a newer javascript way of declaring a function",
//             d: "a type of conditional statement",
//             correct: "a",
//         },
//         // correctAnswer: "a"
//     },
//     {
//         question: "What is the purpose of a for loop?",
//         answers: {
//             a: "It helps us know how to define variables",
//             b: "It allows us to have the same operation done repetitively",
//             c: "Similar to commenting, it can help web developers to better understand code later on",
//             d: "It overwrites the function closest to it",
//             correct: "b",
//         },
//         // correctAnswer: "b"
//     },
//     {
//         question: "What does an arguement do?",
//         answers: {
//             a: "Catches and prevents any merge conflicts from happening",
//             b: "Declares a function",
//             c: "Runs the JS code before any HTML",
//             d: "Passes data into a function",
//             correct: "d",
//         },
//         // correctAnswer: "d"
//     },
//     {
//         question: "What is pseudocode?",
//         answers: {
//             a: "a term frequently used for the finished, or working code",
//             b: "a back-end programming language similar to JavaScript",
//             c: "a plain language description to help developers organize thoughts and plan before writing any actual code",
//             d: "a more user friendly way of writing JavaScript",
//             correct: "c",
//         },
//         // correctAnswer: "c"
//     },
//     {
//         question: "How can we write 'or' in JavaScript terms?",
//         answers: {
//             a: "||",
//             b: "===",
//             c: "&&",
//             d: "//",
//             correct: "a",
//         },
//         // correctAnswer: "a"
//     },

// ];

// //answers array 
// var answerArray = ["a", "b", "c", "d", "correct"];


// //when user clicks start, the timer starts and the first question is displayed
// function clock() {
//     var myTimer = setInterval(myClock, 1000);
//     var sec = 30;

//     function myClock() {
//         document.getElementById("timer").innerHTML = --sec;
//         if (sec == 0) {
//             clearInterval(myTimer);
//             alert("Time is up!");
//         }
//     }
// }
// // for loops begin to loops through question and answer arrays 
// for (i = 0; i < questions.length; i++) {

//     if (currentQuestion < questions.length) {
//         var userQuestion = document.createElement("h3");
//         userQuestion.textContent = questions[currentQuestion].question;
//         mainContainer.appendChild(userQuestion);

//         for (var i = 0; i < answerLetters.length; i++) {
//             var currentLetter = answerLetters[i];
//             var answerChoices = document.createElement('button');
//             answerChoices.classList.add('btn-success', 'btn', 'button')  //add button classes
//             answerChoices.setAttribute("id", (i + 1));
//             answerChoices.innerHTML = ((i + 1) + ". " + questions[questionNumber].answers[currentLetter]);
//             // console.log(answerLetters[i]);
//             questionBox.appendChild(answerChoices);
//         }
//     }
// }
//when the user clicks an answer, they can then hit the "next" button and a new question appears

// keep track of correct user answers and incorrect user answers so we can display their results at the end 


//when the user has answered all five questions, the timer stops upon hitting the "submit" button
//the timer should also stop if user is out of time. 


//once user has hit submit, they can then see their results 


// user can see high scores and enter their initials si tiene high score 