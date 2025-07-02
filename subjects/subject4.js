let progress = 0;

const progressBar = document.getElementById("progressBar");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const backBtn = document.getElementById("backbtn");

increaseBtn.addEventListener("click", () => {
  if (progress < 100) {
    progress += 20;
    updateProgressBar();
  } else {
    // Redirect to next page when 100% is reached
    window.location.href = "result.html";
  }
});

backBtn.addEventListener("click", () => {
  if (progress > 0) {
    progress -= 20;
    updateProgressBar();
  } else {
    alert("You Cant't Go Back It's Your First Question!!");
  }
});

resetBtn.addEventListener("click", () => {
  progress = 0;
  updateProgressBar();
});

function updateProgressBar() {
  progressBar.style.width = progress + "%";
}
