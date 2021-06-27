//global values
const calendar = document.getElementById("calendar"); // calendar div
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var page = 0; // current page of calendar
// if month is nov, dev is 1 and oct is -1

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

function makeWeekdayHeader() {
  const weekday_header = document.getElementById("weekday-header");
  for (i=0;i<7;i++){
    let day = document.createElement("div");
    day.innerText = days[i];
    day.id = "weekday-text";
    weekday_header.appendChild(day);
  }
}

// draw month view grid
function makeRows(rows, cols) {
  const calendar_grid = document.getElementById("calendar-grid");
  calendar_grid.style.setProperty("--grid-rows", rows);
  calendar_grid.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.id = "day"
    calendar_grid.appendChild(cell).className = "column";
  }
}

function startup() {
  makeWeekdayHeader();
  makeRows(6,7);
}

startup();
