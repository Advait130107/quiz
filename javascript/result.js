const result = localStorage.getItem("quizResult");
const totalQuestions = 5;
document.getElementById(
  "resultText"
).textContent = `You answered ${result} out of ${totalQuestions} questions correctly!`;

// Get last quiz page from localStorage
const lastQuizPage = localStorage.getItem("lastQuizPage") || "index.html";

// Button functionality
document.getElementById("tryAgainBtn").addEventListener("click", () => {
  window.location.href = lastQuizPage;
});

document.getElementById("goHomeBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});
