const themeButton = document.querySelector(".theme");
const body = document.body;
const choiceBoxes = document.querySelectorAll(".choice-box");
const heading = document.querySelector(".heading");
const mid = document.querySelector(".mid");

let isOriginalTheme = true;

themeButton.addEventListener("click", () => {
  if (isOriginalTheme) {
    // Change to white background, purple boxes
    body.style.backgroundColor = "white";
    heading.style.backgroundColor = "rgb(166, 120, 179)";
    mid.style.backgroundColor = "rgb(166, 120, 179)";
    choiceBoxes.forEach((box) => (box.style.backgroundColor = "white"));
    themeButton.style.backgroundColor = "rgb(166, 120, 179)";
    isOriginalTheme = false;
  } else {
    // Change back to purple background, white boxes
    body.style.backgroundColor = "rgb(166, 120, 179)";
    heading.style.backgroundColor = "white";
    mid.style.backgroundColor = "white";
    choiceBoxes.forEach(
      (box) => (box.style.backgroundColor = "rgb(166, 120, 179)")
    );
    themeButton.style.backgroundColor = "white";
    isOriginalTheme = true;
  }
});
