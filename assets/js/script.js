// Create a code quiz that contains the following requirements:

// A start button that when clicked a timer starts and the first question appears.

// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
//-------------------------------//
// Set of questions --> array of objects
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

// Each question needs the following:
// Question text
// Set of answers
// Which answer is correct

// Landing page:
// Explanation of the quiz
// Start button

// Click the start button:
// Landing page goes away
// Timer starts
// The first question appears (with its answers)

// For each question:
// User clicks an answer
// Their choice is compared to the correct answer as stored in the question's object
// If correct, tell them
// If incorrect, tell them AND subtract time from the timer
// Optional: play a sound for correct or incorrect
// Either way, the question disappears after a few seconds and the next question appears

// After the last question:
// Timer stops
// Question disappears
// Form appears for user to enter their initials
// Display their score

// User submits form
// Initials and score get stored in local storage
// User is taken to the high scores page
// High scores are listed, sorted highest to lowest
// User has option to take the quiz again
