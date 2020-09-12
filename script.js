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
    questions: "Which is not an object represents basic data type of Global JavaScript Objects?",
    answer: [
      { text: "String", result: false },
      { text: "Number", result: false },
      { text: "Document", result: true },
      { text: "Boolean", result: false },
    ],
  },
  {  
    questions:"What function do you use to change string to upercase characters?",
    answer: [
      { text: "toLowerCase", result: false },
      { text: "Capital", result: false },
      { text: "toUpperCase", result: true },
      { text: "Trim", result: false },
    ],
  },
];

var startButtonEl = document.getElementById("startButtonEl");
var currentQuestion;
var availableQuestions = [...questions];
var questionsIndex = 0;
var questionCounter = 0;
var acceptingAnswer = false;
var correctAnswer = 10;
var time = 120;
var scores = 0;
var secondElapsed;
var timer = addEventListener("#click", startBtn);
var startQuizEl = document.getElementById("instrPage");
var codeQuestionsEl = document.getElementById("codeQuests");
var resultUserEl = document.getElementById("divAlertAns");
// var timeDisplay = document.getElementById("timeDisplay")

//scores located

if (localStorage.getItem("localHighScores")) {
  scoresArray = JSON.parse(localStorage.getItem("localHighScores"));
} else {
  scoresArray = [];
}

//writing functions
function startBtn() {
  // console.log("startbutton");
  startQuiz();
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
      return; 
      resultPage();
    } else {
      var secondLeft = totalSeconds - secondElapsed;
      var minute = Math.floor(secondLeft / 60);
      var second = secondLeft % 60;

      timeDisplay.textContent = "time " + minute + ":" + second;
    }
  }, 1000);
}



//display introduction
function startQuiz() {
  startQuizEl.style.display = "none";
}

acceptingAnswers = true;
//generating questions
function getQuestion() {
  if (availableQuestions.length == 0) {
    localStorage.setItem("highScore", score);
    return window.location.assign("resultPage.html");
  }

  codeQuestionsEl.style.display = "block";

  var questionChoicesEl = document.getElementById("questionChoices");
  var questionIndex = Math.floor(Math.random() * questions.length);

  currentQuestion = questions[questionIndex];
  questionChoicesEl.textContent = currentQuestion.questions;

  for (var i = 0; i < 4; i++) {
    var oldButtonEl = document.getElementById("~");
    // var newButtonEl = oldButtonEl.cloneNode(true);

    // oldButtonEl.parentNode.replaceChild(newButtonEl, oldButtonEl);

    oldButtonEl.textContent = currentQuestion.answer[i].text;
    newButtonEl.addEventListener("click", selectAnswer(questionIndex, i));
  
  }
}

//prompt correct or incorrect answer
function selectAnswer(questionIndex, answerIndex) {
  // return function onSelectAnswerClick() {
    if (currentQuestion.answer[answerIndex].result) {
     var answerText = document.getElementById("divAlertAns");
   
      // score ++;
      answerText = "Correct!";
      
    } else {
      answerText = "Wrong!";
      secondElapsed += 10;
     
    }
    // questions.splice(questionIndex, 1);
    questionsIndex++;
    getQuestion();
  // };
}

//timeout if there is no more questions
function setTimeout(){
  if (availableQuestions === 0) {
    return ("resultPage.html")
  } 
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
var userInitials = "";
function submitInitials(event) {
  event.preventDefault();
  if (userInitials.value.trim() == '') {
    var initialEl = document.getElementById("inputInitial");
    if (initialEl.style !="display:block;") {
        initialEl.style = "display:block;";

          setTimeout(function () {
              alertBoxDiv.style = "display: none;";
          }, 1000);
      }
      return;
  } else {
      var newHighScore = {
          initials: playerInitials.value.toUpperCase().trim(),
          score: time
      };
      scoresArray.push(newHighScore);
      scoresArray.sort(function (a, b) { return b.score - a.score });
      localStorage.setItem("localHighScores", JSON.stringify(scoresArray));
      window.location.href = "resultPage.html";
  }
}

//add event listener

// resultUserEl.style.display = "none";
codeQuestionsEl.style.display = "none";
startButtonEl.addEventListener("click", startBtn);


