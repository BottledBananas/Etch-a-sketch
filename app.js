const container = document.getElementById("container");
const setupBtn = document.querySelector("#setup");
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(32, 32);

function selector() {
  let input = prompt("How many squared pixels do you want the grid to be?");
  if (input > 100) {
    prompt(`${input} pixels is too much! Try less than 100 pixels.`);
  }
  makeRows(input, input);
}
