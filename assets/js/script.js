const questions = [
  {
    id: 1,
    question: "Who will be the King of Pirates? ",
    options: ["Buggy", "Katakuri", "Luffy", "Boa Hancock"],
    correctAnswer: "Luffy",
  },

  {
    id: 2,
    question: "How old was Luffy pre-time skip?",
    options: ["16", "17", "18", "19"],
    correctAnswer: "17",
  },

  {
    id: 3,
    question: "What is the name of the Straw Hats first ship?",
    options: ["Going Merry", "Merry Go", "Merry", "Thousand Sunny"],
    correctAnswer: "Going Merry",
  },

  {
    id: 4,
    question: "What is the name of Brook's old crew?",
    options: [
      "The Roshio Pirates",
      "The On-Air Pirates",
      "The Rumbar Pirates",
      "The Spade Pirates",
    ],
    correctAnswer: "The Rumbar Pirates",
  },
  {
    id: 5,
    question: "Which sword does Zoro use with his mouth?",
    options: ["Wado Ichimonji", "Shusui", "Sandai Kitetsu", "Enma"],
    correctAnswer: "Wado Ichimonji",
  },
];

var startButton = document.getElementById("start-button");
var startScreen = document.getElementById("start-screen");
var timerElement = document.getElementById("time");

var currentQuestionIndex = 0;
var questionsContainer = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById("choices");
var feedbackContainer = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var finalScore = document.getElementById("final-score");

var timer;
var timeLimit = 60;
var timeLeft;

startButton.addEventListener("click", function () {
  startScreen.style.display = "none";
  startTimer();
  showQuestion();
});

function startTimer() {
  timeLeft = timeLimit;
  displayTime();

  timer = setInterval(function () {
    timeLeft--;
    console.log(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timer);
      gameOver();
    }
    displayTime();
  }, 1000);
}

function displayTime() {
  timerElement.textContent = timeLeft;
}

function gameOver() {
  questionsContainer.classList.add("hide");
  endScreen.classList.remove("hide");
  finalScore.textContent = timeLeft;
  console.log("GAME OVER!");
}

function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.question;

  choicesContainer.innerHTML = "";

  for (var i = 0; i < currentQuestion.options.length; i++) {
    var optionButton = document.createElement("button");
    optionButton.textContent = currentQuestion.options[i];
    optionButton.addEventListener("click", function () {
      checkAnswer(this.textContent);
    });
    choicesContainer.appendChild(optionButton);
  }

  questionsContainer.classList.remove("hide");
  feedbackContainer.classList.add("hide");
}

function checkAnswer(userChoice) {
  var currentQuestion = questions[currentQuestionIndex];

  if (userChoice === currentQuestion.correctAnswer) {
    console.log("Correct!");
    showFeedback("Correct!", "green");
  } else {
    console.log("Incorrect!");
    showFeedback("Incorrect! -10 seconds", "red");
    timeLeft -= 10;
    if (timeLeft < 0) {
      timeLeft = 0;
    }
    displayTime();
  }

  setTimeout(function () {
    questionsContainer.classList.add("hide");
    feedbackContainer.classList.add("hide");
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
}

function showFeedback(message, color) {
  feedback.textContent = message;
  feedback.style.color = color;
  feedback.classList.remove("hide");
}

submitButton.addEventListener("click", function () {
  var initials = initialsInput.value.trim().toUpperCase();

  if (initials !== "") {
    var scores = JSON.parse(localStorage.getItem("highScores")) || [];
    scores.push({ initials: initials, score: timeLeft });
    localStorage.setItem("highScores", JSON.stringify(scores));
    window.location.href = "highscores.html";
  }
});
