// event listener for nav bar arrows
const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");

left_arrow.addEventListener("click", moveLeft);
right_arrow.addEventListener("click", moveRight);

function moveLeft() {
  console.log("left");
}

function moveRight() {
  console.log("right");
}

// draw month view grid
const container = document.getElementById("container");
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    container.appendChild(cell).className = "column";
  }
}
makeRows(5, 7);
