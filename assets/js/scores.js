document.addEventListener("DOMContentLoaded", function () {
  var highscoresList = document.getElementById("highscores");
  var clearButton = document.getElementById("clear");

  showHighScores();

  clearButton.addEventListener("click", function () {
    localStorage.removeItem("highScores");

    showHighScores();
  });

  function showHighScores() {
    highscoresList.innerHTML = "";

    var scores = JSON.parse(localStorage.getItem("highScores")) || [];

    scores.sort(function (a, b) {
      return b.score - a.score;
    });

    scores.forEach(function (score) {
      var li = document.createElement("li");
      li.textContent = `${score.initials} : ${score.score} POINTS`;
      li.classList.add("highscore-item");
      highscoresList.appendChild(li);
    });
  }
});
