// assign vars
// classese
"jumbotron" 




// IDs
"instrPage"
"startBtn"

"codeQuests"
"ansChoices"

"divAlertAns"
"totalScores"
"scoreResult"
"userInitial"
"inputInitial" 
"sumitBtn"
"wellDone"

var startBtn = document.getElementById("startBtn");
var currentQuestion;
var availableQuestions = [...quests];
var questionsIndex = 0;
var questionCounter = 0;
var acceptingAnswer = true;
var correctanswer= 0;
var time = 180;
var scores = 0;
var start = document.querySelector("#startHere")
var toDIsplayAnswer = document.querySelectorAll("#ansChoices");
var arrayIndex= true;
var toHide = true;

var timer= addEventListener("#click",)

var answerChoiceBtn = document.querySelectorById("btn-questOne"), document.querySelectorById("btn-questTwo"), document.querySelectorById("btn-questThree"), document.querySelectorById("btn-questFour")

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

var questions = [
    { questions: "What is not included in flowshart key?",
      answer: [{text: "Note", correct: true,
                text: "Event", correct: false,
                text: "Decision", correct: false,
                text: "Input", correct: false}]
}

{ questions: "Which one is not representing the use of variables?",
answer: [{text: "Numbers", result: false},
          {text: "Reserch", result: true},
          {text: "Data", resultt: false},
          {text: "Names",result: false}]
}

{ questions: "When asking a function to perform its task, it is known as?",
answer: [{ text: "Calling the function", result: true},
          {text: "Join the function", result: false},
         {text: "Rename the function", result: false},
          {text: "Perform the function", result: true}]
}


{ questions: "What is not part of three groups of built-in objects?",
answer: [{text: "Global JavaScipt Objects", result: false},
         {text: "Document Object Model", result: false},
          {text: "Browser Object Model", result: false},
          {text: "Double Three Objects", result: true}]
}


{ questions: "Which is not an object represents basic data type of Global JavaScript Objects?",
answer: [{text: "String", result: false},
          {text: "Number", result: false},
          {text: "Document", result: true},
          {text: "Boolean", result: false}]
}
]


//writing functions
function startTimer () {
    hideStarter();
    getQuestion();
    var secondElapsed=0;
    var totalSeconds= 180;
    var timerInterval = setInterval(function() {
        secondElapsed++;
        if (secondElapsed >= totalSeconds) {
            clearInterval (timerInterval);
            return;
            //end game();
        } else {
            var secondsLeft =(totalSeconds - secondElapsed);
            // minutesDIsplay.textContent = Math.floor(secondsLeft /60);
            // secondsDisplay.textContent =(secondsLeft %60)
            secondsDisplay.textContent =secondLeft;
        }
    }, 10000);
}

availableQuestions.splice(random,1);
acceptingAnswers =true;

function startTimer()


function hideStarter() {
    if (toHide) {

    }
}



function getQuestion () {
    questionsCounter++;
    var random = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[random];
    showQuestions.textContent = currentQuestion.question;

    for (var i=0; i < toDIsplayAnswer.length; i++) {
        var buttonIndexing = toDIsplayAnswer[i].dataset['id'];
        toDIsplayAnswer[buttonIndexing].textContent =currentQuestion.answers[buttonIndexing];
    }
    availableQuestions.splice(random,1);
acceptingAnswers =true;
}

var availableQuestions= [...questions];
var currentQuestion;
var showQuestions= document.getElementById("");


//add event listener 
startBtn.addEventListener("click", hideStarter);
startBtn.addEventListener("click", startBtn);



//anything that said data- something, computer has it in the dom...data----dataset id: 0