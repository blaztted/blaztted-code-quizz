document.addEventListener("DOMContentLoaded", function () {
  var highscoresList = document.getElementById("highscores");
  var clearButton = document.getElementById("clear");

  // Load and display high scores
  displayHighScores();

  clearButton.addEventListener("click", function () {
    // Clear high scores from local storage
    localStorage.removeItem("highScores");

    // Refresh the high scores list
    displayHighScores();
  });

  function displayHighScores() {
    highscoresList.innerHTML = ""; // Clear existing entries

    var scores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Sort scores in descending order
    scores.sort(function (a, b) {
      return b.score - a.score;
    });

    // Display each score in the list
    scores.forEach(function (score, index) {
      var li = document.createElement("li");
      li.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
      highscoresList.appendChild(li);
    });
  }
});
