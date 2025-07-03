const questions = [
  {
    text: `Who was the first President of the United States?`,
    options: [
      " Abraham Lincoln ",
      "George Washington",
      "John Adams",
      "Thomas Jefferson",
    ],
    correct: "George Washington",
  },
  {
    text: `Where is the Great Wall located?`,
    options: [" Japan  ", "India  ", "China", "Russia"],
    correct: "China",
  },
  {
    text: `Which country is called the "Land of the Rising Sun"?`,
    options: [" China  ", "Australia  ", "Thailand ", "Japan"],
    correct: "Japan",
  },
  {
    text: `Who was known as the "Iron Man of India"?`,
    options: [
      "Sardar Vallabhbhai Patel",
      " Jawaharlal Nehru  ",
      "Subhash Chandra Bose ",
      " Mahatma Gandhi ",
    ],
    correct: "Sardar Vallabhbhai Patel",
  },
  {
    text: `The longest river in the world is?`,
    options: ["Yangtze ", "Amazon", " Mississippi", "Nile"],
    correct: "Nile",
  },
];

let progress = 0;
let currentQuestion = 0;
let correctCount = 0;

const progressBar = document.getElementById("progressBar");
const resetBtn = document.getElementById("resetBtn");
const backBtn = document.getElementById("backbtn");
const submitBtn = document.getElementById("submitBtn");
const options = document.querySelectorAll(".options");
const questionElement = document.getElementById("question");
const homeBtn = document.getElementById("homeBtn");

submitBtn.style.display = "none";
loadQuestion();

options.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedText = option.textContent;
    const correctAnswer = questions[currentQuestion].correct;

    options.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");

    if (selectedText === correctAnswer) {
      correctCount++;
    }

    if (progress < 100) {
      progress += 20;
      currentQuestion++;
      updateProgressBar();

      if (progress === 100) {
        submitBtn.style.display = "inline-block";
      }

      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        questionElement.innerHTML =
          "Quiz Completed!<br><br>Submit To Check Result!!";
        options.forEach((opt) => (opt.style.display = "none"));
      }
    }
  });
});

submitBtn.addEventListener("click", () => {
  localStorage.setItem("quizResult", correctCount);
  window.location.href = "result.html";
});

backBtn.addEventListener("click", () => {
  if (progress > 0) {
    progress -= 20;
    currentQuestion = Math.max(0, currentQuestion - 1);
    updateProgressBar();
    loadQuestion();
    submitBtn.style.display = "none";
  } else {
    alert("You Can't Go Back, It's Your First Question!");
  }
});

resetBtn.addEventListener("click", () => {
  progress = 0;
  currentQuestion = 0;
  correctCount = 0;
  updateProgressBar();
  loadQuestion();
  submitBtn.style.display = "none";
});

homeBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

function updateProgressBar() {
  progressBar.style.width = progress + "%";
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.text;

  q.options.forEach((optText, idx) => {
    options[idx].textContent = optText;
    options[idx].classList.remove("selected");
    options[idx].style.display = "inline-block";
  });
}
localStorage.setItem("lastQuizPage", window.location.href);
