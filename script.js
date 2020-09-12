// assign vars

var questions = [
  {
    questions: "What is not included in flowshart key?",
    answer: [
      { text: "Note", result: true },
      { text: "Event", result: false },
      { text: "Decision", result: false },
      { text: "Input", result: false },
    ],
  }, {
    questions: "Which one is not representing the use of variables?",
    answer: [
      { text: "Numbers", result: false },
      { text: "Reserch", result: true },
      { text: "Data", resultt: false },
      { text: "Names", result: false },
    ],
  }, {
    questions: "When asking a function to perform its task, it is known as?",
    answer: [
      { text: "Calling the function", result: true },
      { text: "Join the function", result: false },
      { text: "Rename the function", result: false },
      { text: "Perform the function", result: true },
    ],
  }, {
    questions: "What is not part of three groups of built-in objects?",
    answer: [
      { text: "Global JavaScipt Objects", result: false },
      { text: "Document Object Model", result: false },
      { text: "Browser Object Model", result: false },
      { text: "Double Three Objects", result: true },
    ],
  }, {
    questions: "Which is not an object represents basic data type of Global JavaScript Objects?",
    answer: [
      { text: "String", result: false },
      { text: "Number", result: false },
      { text: "Document", result: true },
      { text: "Boolean", result: false },
    ],
  }, {
    questions: "What function do you use to change string to upercase characters?",
    answer: [
      { text: "toLowerCase", result: false },
      { text: "Capital", result: false },
      { text: "toUpperCase", result: true },
      { text: "Trim", result: false },
    ],
  },
];

var startButtonEl = document.getElementById("startButtonEl");
var submitBtnEl = document.getElementById("thankYou");
var questionIndex = 0;
var questionCounter = 0;
var acceptingAnswer = true;
var correctAnswer = 10;
var time = 120;
var score = 0;
var secondElapsed;
var toDisplayAnswer = document.querySelectorAll("#ansChoices");
var startQuizEl = document.getElementById("instrPage");
var codeQuestionsEl = document.getElementById("codeQuests");
var resultUserEl = document.getElementById("divAlertAns");

//scores located
if (localStorage.getItem("localHighScores")) {
  scoresArray = JSON.parse(localStorage.getItem("localHighScores"));
} else {
  scoresArray = [];
}

//writing functions
function startBtn() {
  // console.log("startbutton");
  startQuizEl.classList.add("d-none");
  codeQuestionsEl.classList.remove("d-none");
  document.getElementById("thankYou").classList.add("d-none");
  getQuestion();
  startTimer();
}

//start timer
function startTimer() {
  var timeDisplay = document.getElementById("timeDisplay");
  secondElapsed = 0;
  var totalSeconds = 90;
  var timerInterval = setInterval(function () {
    secondElapsed++;
    if (secondElapsed >= totalSeconds) {
      console.log("time" + 00);
      clearInterval(timerInterval);
    } else {
      var secondLeft = totalSeconds - secondElapsed;
      var minute = Math.floor(secondLeft / 60);
      var second = secondLeft % 60;

      timeDisplay.textContent = "time " + minute + ":" + second;
    }
  }, 1000);
}

acceptingAnswers = true;

//generating questions
function getQuestion() {
  if (questions.length === 0) {
    document.getElementById("codeQuests").classList.add("d-none");
    document.getElementById("myScore").textContent = score;
    document.getElementById("totalScores").classList.remove("d-none");
  } else {
    var questionChoicesEl = document.getElementById("questionChoices");
    questionIndex = Math.floor(Math.random() * questions.length);

    currentQuestion = questions[questionIndex];
    questionChoicesEl.textContent = currentQuestion.questions;

    for (var i = 0; i < currentQuestion.answer.length; i++) {
      var buttonEl = document.getElementById(i);

      buttonEl.textContent = currentQuestion.answer[i].text;
      buttonEl.addEventListener("click", selectAnswer);
    }
  }
}

//prompt correct or incorrect answer
function selectAnswer(event) {
  var buttenClicked = event.target;
  var answerIndex = parseInt(buttenClicked.getAttribute("id"));

  if (questions[questionIndex].answer[answerIndex].result) {
    // var answerText = document.getElementById("divAlertAns");

    score++;
    alert("Correct!");
  } else {
    alert("Wrong!");
    secondElapsed += 10;
  }
  questions.splice(questionIndex, 1);
  questionIndex++;
  getQuestion();
}

//timeout if there is no more questions
function setTimeout() {
  // if (questions.length === 0) {
  //   return ("resultPage.html")
  // }
}

//show resultpage and score 
function resultPage() {
  document.getElementById("timeDisplay").textContent = "Time: " + time;

  if (time != 0) {
    document.getElementById("scoreResult").textContent = time;
  } else {
    document.getElementById("scoreResult").textContent = "N/A";
  }
}

//submit userInitials
function submitInitials(event) {
  event.preventDefault();
  // document.getElementById("thankYou").classList.add("d-none");

  var userInitials = document.getElementById("userInitials").value;

  if (userInitials.trim() == '') {
    var initialEl = document.getElementById("inputInitial");

    if (initialEl.style != "display:block;") {
      initialEl.style = "display:block;";

      setTimeout(function () {
        alertBoxDiv.style = "display: none;";
      }, 1000);
    }
  } else {
    var newHighScore = {
      initials: userInitials,
      score: score
    };

    scoresArray.push(newHighScore);
    scoresArray.sort(function (a, b) { return b.score - a.score });
    localStorage.setItem("localHighScores", JSON.stringify(scoresArray));
  }
  
}


//add event listener
startButtonEl.addEventListener("click", startBtn);
sumitBtn.addEventListener("click", submitInitials);
