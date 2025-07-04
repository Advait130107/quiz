const questions = [
  {
    text: `Who played Iron Man in the Marvel movies?`,
    options: [
      "Chris Evans",
      "Tom Holland",
      "Robert Downey Jr",
      "Chris Hemsworth",
    ],
    correct: "Robert Downey Jr",
  },
  {
    text: `Which movie won the Oscar for Best Picture in 2023?`,
    options: [
      "Top Gun: Maverick",
      "Avatar: The Way of Water",
      " Elvis",
      " Everything Everywhere All at Once ",
    ],
    correct: " Everything Everywhere All at Once ",
  },
  {
    text: `Who is known as the "King of Pop"?`,
    options: [
      "Justin Bieber",
      "Elvis Presley",
      "Michael Jackson",
      "Ed Sheeran",
    ],
    correct: "Michael Jackson",
  },
  {
    text: `Which Indian movie won an Oscar for Best Original Song in 2023??`,
    options: ["RRR (Naatu Naatu)", "Kantara ", "Pathaan ", "Brahmastra"],
    correct: "RRR (Naatu Naatu)",
  },
  {
    text: `What is the name of the wizarding school in Harry Potter?`,
    options: ["Narnia", "Camp Half-Blood", "Mordor", "Hogwarts"],
    correct: "Hogwarts",
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
