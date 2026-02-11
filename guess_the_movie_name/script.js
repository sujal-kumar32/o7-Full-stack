const inputs = document.querySelectorAll(".input-row input");
const bombs = document.querySelectorAll(".bomb");

const correctAnswer = ["1", "9", "2", "0"];

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value === "") return;

    if (input.value === correctAnswer[index]) {
      bombs[index].src = "image1.png"; 
    } else {
      bombs[index].src = "image2.png"; 
    }

    if (inputs[index + 1]) {
      inputs[index + 1].focus();
    }
  });
});

function retry() {
  inputs.forEach((input) => (input.value = ""));
  bombs.forEach((bomb) => (bomb.src = "image1.png"));
  inputs[0].focus();
}
