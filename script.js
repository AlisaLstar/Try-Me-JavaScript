// assign vars

var questions = [
  {
    questions: "What is not included in flowshart key?",
    answer: [
      {
        text: "Note",
        correct: true,
        text: "Event",
        correct: false,
        text: "Decision",
        correct: false,
        text: "Input",
        correct: false,
      },
    ],
  },

  {
    questions: "Which one is not representing the use of variables?",
    answer: [
      { text: "Numbers", result: false },
      { text: "Reserch", result: true },
      { text: "Data", resultt: false },
      { text: "Names", result: false },
    ],
  },

  {
    questions: "When asking a function to perform its task, it is known as?",
    answer: [
      { text: "Calling the function", result: true },
      { text: "Join the function", result: false },
      { text: "Rename the function", result: false },
      { text: "Perform the function", result: true },
    ],
  },

  {
    questions: "What is not part of three groups of built-in objects?",
    answer: [
      { text: "Global JavaScipt Objects", result: false },
      { text: "Document Object Model", result: false },
      { text: "Browser Object Model", result: false },
      { text: "Double Three Objects", result: true },
    ],
  },

  {
    questions:
      "Which is not an object represents basic data type of Global JavaScript Objects?",
    answer: [
      { text: "String", result: false },
      { text: "Number", result: false },
      { text: "Document", result: true },
      { text: "Boolean", result: false },
    ],
  },
];

var startButtonEl = document.getElementById("startButtonEl");
var currentQuestion;
var availableQuestions = [...questions];
var questionsIndex = 0;
var questionCounter = 0;
var acceptingAnswer = true;
var correctanswer = 0;
var time = 120;
var scores = 0;
var secondElapsed;

// var start = document.querySelector("#codeQuests");
var toDisplayAnswer = document.querySelectorAll("#ansChoices");
// var questionChoicesEl= document.getElementById("questionChoices");

var arrayIndex = true;
var toHide = true;

var timer = addEventListener("#click", startBtn);
var startQuizEl = document.getElementById("instrPage");
var codeQuestionsEl = document.getElementById("codeQuests");
var resultUserEl = document.getElementById("divAlertAns");
// var timeDisplay = document.getElementById("timeDisplay")





//writing functions

function startBtn() {
  // console.log("startbutton");
  startQuiz();
  getQuestion();
  startTimer();
}

function startTimer() {
  // startQuiz();
  // getQuestion();
  var timeDisplay = document.getElementById("timeDisplay")
      secondElapsed = 0;
  var totalSeconds = 120;
  var timerInterval = setInterval(function () {
    secondElapsed++;
    if (secondElapsed >= totalSeconds) {
      console.log("time" + 00)
      clearInterval(timerInterval);
      return;
      //end game();
    } else {
      var secondLeft = totalSeconds - secondElapsed;
      var minute = Math.floor(secondLeft /60);
      var second = secondLeft % 60;

      timeDisplay.textContent = "time " + minute + ":" + second;   
    }
  }, 1000);
}

// availableQuestions.splice(random,1);
acceptingAnswers =true;

function startQuiz() {
  startQuizEl.style.display = "none";
}


// function getQuestion() {
//     if (availableQuestions.length == 0) {
//         localStorage.setItem("latestScore", score);
//         return window.location.assign("endGame.html")
//     }
//   codeQuestionsEl.style.display = "block";
//   var questionChoicesEl = document.getElementById("questionChoices");
//   // document.querySelector("#questionChoices").textContent = questions.questions;

// //   questionsCounter++;
//   var random = Math.floor(Math.random() * questions.length);
//       currentQuestion = questions[random];
//   questionChoicesEl.textContent = currentQuestion.questions;

//   for (var i = 0; i < currentQuestion.answer.length; i++) {
//     var buttonEl = document.getElementById(i);
//    buttonEl.textContent=currentQuestion.answer[i].text;
//    buttonEl.addEventListener("click", selectAnswer(i));
//   }
//   //  questions.splice(random, 1);
// //   acceptingAnswers = true;
// }

// function selectAnswer(i){
//   console.log("selectAnswer")
//   return function selectAnswerHandler() {
//     console.log (currentQuestion.answer[i]);
//     if(currentQuestion.answer[i].result === true){
//       console.log(true);
//       for (var i = 0; i < currentQuestion.answer.length; i++) {
//         var buttonEl = document.getElementById(i);
//        buttonEl.removeEventListener("click", selectAnswerHandler);
//       }
//       questions.splice(i, 1);
//       getQuestion();
//     } else {
//       console.log(false);
//       secondElapsed += 10;
//     }
//   }    
// }

//editted 
function getQuestion() {
  if (availableQuestions.length == 0) {
      localStorage.setItem("latestScore", score);
      return window.location.assign("endGame.html")
  }

  codeQuestionsEl.style.display = "block";

  var questionChoicesEl = document.getElementById("questionChoices");
  var questionIndex = Math.floor(Math.random() * questions.length);
  

  currentQuestion = questions[questionIndex];
  questionChoicesEl.textContent = currentQuestion.questions;

  for (var i = 0; i < currentQuestion.answer.length; i++) {
      var oldButtonEl = document.getElementById(i);
      var newButtonEl = oldButtonEl.cloneNode(true);

      oldButtonEl.parentNode.replaceChild(newButtonEl, oldButtonEl);

      newButtonEl.textContent = currentQuestion.answer[i].text;
      newButtonEl.addEventListener("click", selectAnswer(questionIndex, i));
  }
}

function selectAnswer(questionIndex, answerIndex) {
  return function onSelectAnswerClick () {
      if (currentQuestion.answer[answerIndex].result) {
          questions.splice(questionIndex, 1);
          getQuestion();
      } else {
          secondElapsed += 10;
      }
  }
}

// var availableQuestions= [...questions];

var showQuestions = document.getElementById("");

// function incrementScore(number) {
//   scoreCounText.textContent = score;
// }
//add event listener

resultUserEl.style.display = "none";
codeQuestionsEl.style.display = "none";
startButtonEl.addEventListener("click", startBtn);

//anything that said data- something, computer has it in the dom...data----dataset id: 0





// toDisplayAnswer.forEach(toDisplayAnswer=>{
// toDisplayAnswer.addEventListener("click", e =>{

//     e.preventDefault();
//     e.stopPropagation();
//     if (!acceptingAnswer) {return};
//     acceptingAnswer= false;
//     var selectedChoice= e.target;
//     var crossAnswer = selectedChoice.querySelectorAll['id'];
//     console.log (crossAnswer == currentQuestion.answer);

//     if (crossAnswer== currentQuestion.answer){
//         incrementScore(scoreBonus);
//         score++;

//         outcomeDiv.removeAttribute("class, hide");
//         outcome.textContent = "correct";
//         setTimeout (()=>{
//             outcomeDiv.setAttribute("class", "hide");
//             getQuestion();
//         }, 1000);

//     }
//     else {
//         outcomeDiv.removeAttribute("class, hide");
//         outcome.textContent = "incorrect";
//         setTimeout (()=>{
//             outcomeDiv.setAttribute("class", "hide");
//             getQuestion();
//         }, 300);
//     }
// })
// }

// endGame 



// var quests = [ {
//     question : "How are you doing?",
//     answer: ["Not Bad", "Very Awesome", "Happy", "Joy"],
//     correctAnswer: 1}

//     {question : "How are you doing?",
//     answer: ["Not Bad", "Very Awesome", "Happy", "Joy"],
//     correctAnswer: 1}
//     {question : "How are you doing?",
//     answer: ["Not Bad", "Very Awesome", "Happy", "Joy"],
//     correctAnswer: 1}
// ]



// To hide 
// if (toHide) { document.getElementById("instrPage", class="display: none");
// document.getElementById("codeQuests", class="display");
// if(toStartQuiz) {
//     toStartQuiz = false;
//     startSec.setAttribute("id", "noneDisplay")
//     questionsSec.removeAttribute("id", "noneDisplay")
// }