// assign vars
// classese
"jumbotron";

// IDs
"instrPage";
"startBtn";

"codeQuests";
"ansChoices";

"divAlertAns";
"totalScores";
"scoreResult";
"userInitial";
"inputInitial";
"sumitBtn";
"wellDone";
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
var time = 180;
var scores = 0;
var start = document.querySelector("#codeQuests");
var toDIsplayAnswer = document.querySelectorAll("#ansChoices");
var arrayIndex = true;
var toHide = true;

var timer = addEventListener("#click", startBtn);
var startQuizEl = document.getElementById("instrPage");
var codeQuestionsEl = document.getElementById("codeQuests");
var resultUserEl = document.getElementById("divAlertAns");



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

//writing functions

function startBtn() {
  console.log("startbutton");
  startQuiz();
  getQuestion();
  startTimer();
}

function startTimer() {
  hideStarter();
  getQuestion();
  var secondElapsed = 0;
  var totalSeconds = 180;
  var timerInterval = setInterval(function () {
    secondElapsed++;
    if (secondElapsed >= totalSeconds) {
      clearInterval(timerInterval);
      return;
      //end game();
    } else {
      var secondsLeft = totalSeconds - secondElapsed;
      minutesDIsplay.textContent = Math.floor(secondsLeft /60);
      secondsDisplay.textContent =(secondsLeft %60)
      secondsDisplay.textContent = secondLeft;
    }
  }, 1000);
}

// availableQuestions.splice(random,1);
// acceptingAnswers =true;

function startQuiz() {
  startQuizEl.style.display = "none";
}

// if (toHide) { document.getElementById("instrPage", class="display: none");
// document.getElementById("codeQuests", class="display");
// if(toStartQuiz) {
//     toStartQuiz = false;
//     startSec.setAttribute("id", "noneDisplay")
//     questionsSec.removeAttribute("id", "noneDisplay")
// }

function getQuestion() {
    if (availableQuestions.length ==0){
        localStorage.setItem("latestScore", score);
        return window.location.assign("endGame.html")
    }
  codeQuestionsEl.style.display = "block";
  var questionChoicesEl = document.getElementById("questionChoices");
  
//   questionsCounter++;
  var random = Math.floor(Math.random() * questions.length);
  var currentQuestion = questions[random];
  questionChoicesEl.textContent = currentQuestion.question;

  for (var i = 0; i < currentQuestion.answer.length; i++) {
    var buttonEl = document.getElementById(i);
   buttonEl.textContent=currentQuestion.answer[i].text;
  }
   questions.splice(random, 1);
//   acceptingAnswers = true;
}

// var availableQuestions= [...questions];

var showQuestions = document.getElementById("");

function incrementScore(number) {
  scoreCounText.textContent = score;
}
//add event listener
resultUserEl.style.display = "none";
codeQuestionsEl.style.display = "none";
startButtonEl.addEventListener("click", startBtn);

//anything that said data- something, computer has it in the dom...data----dataset id: 0





toDisplayAnswer.forEach(toDisplayAnswer=>){
toDIsplayAnswer.addEventListener("click", e =>{

    e.preventDefault();
    e.stopPropagation();
    if (!acceptingAnswer) {return};
    acceptingAnswer= false;
    var selectedChoice= e.target;
    var crossAnswer = selectedChoice.dataset['id'];
    console.log (crossAnswer == currentQuestion.answer);

    if (crossAnswer== currentQuestion.answer){
        incrementScore(scoreBonus);
        score++;

        outcomeDiv.removeAttribute("class, hide");
        outcome.textContent = "correct";
        setTimeout (()=>{
            outcomeDiv.setAttribute("class", "hide");
            getQuestion();
        }, 1000);

    }
    else {
        outcomeDiv.removeAttribute("class, hide");
        outcome.textContent = "incorrect";
        setTimeout (()=>{
            outcomeDiv.setAttribute("class", "hide");
            getQuestion();
        }, 300);
    }
})
}

endGame 