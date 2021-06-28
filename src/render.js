//global values
//grid size
const cols = 7;
const rows = 6;

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

var cur_month = new Date(); //month of current calendar view
cur_month.setDate(1); //set to first of month to avoid conflict with certain months

// event listener for nav bar arrows
const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");

left_arrow.addEventListener("click", moveLeft);
right_arrow.addEventListener("click", moveRight);

function moveLeft() {
  cur_month = cur_month.setMonth(cur_month.getMonth() - 1);
  refreshCalendar(getPaddingDays(cur_month));
}

function moveRight() {
  month_page++;
}

function daysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

//gets number of padding days in a certain month
function getPaddingDays(date) {
  date.setDate(1);
  return date.getDay();
}

//creates header with weekday titles
function makeWeekdayHeader() {
  const weekday_header = document.getElementById("weekday-header");
  for (i = 0; i < 7; i++) {
    let day = document.createElement("div");
    day.innerText = days[i];
    day.id = "weekday-text";
    weekday_header.appendChild(day);
  }
}

// draw month view grid
function makeCalendarGrid(padding_days) {
  const calendar_grid = document.getElementById("calendar-grid");
  calendar_grid.style.setProperty("--grid-rows", rows);
  calendar_grid.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    if (c < padding_days || c > daysInMonth(cur_month)) {
      cell.id = "padding";
    } else {
      cell.id = "day";
      cell.innerText = c - padding_days + 1;
    }
    calendar_grid.appendChild(cell).className = "column";
  }
}

function refreshCalendar(padding_days) {
  //select calendar grid
  const calendar_grid = document.getElementById("calendar-grid");
  //remove all contents from div
  removeChildren(calendar_grid);
  //recreate calendar grid
  makeCalendarGrid(padding_days)
}

//remove all children from a div
function removeChildren(parent){
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//functions to run on startup
function startup() {
  makeWeekdayHeader();
  refreshCalendar(getPaddingDays(cur_month));
}

startup();
