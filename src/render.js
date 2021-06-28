/*------Global values------*/
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

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const today = new Date(); //today
var cur_month = new Date(); //month of current calendar view
cur_month.setDate(1); //set to first of month to avoid conflict with certain months
//end global values

/*------Event listeners------*/
const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");

left_arrow.addEventListener("click", moveLeft);
right_arrow.addEventListener("click", moveRight);

/*------Button behavior------*/
// move calendar back one month
function moveLeft() {
  cur_month.setMonth(cur_month.getMonth() - 1);
  refreshCalendar();
}

// move calendar forward one month
function moveRight() {
  cur_month.setMonth(cur_month.getMonth() + 1);
  refreshCalendar();
}

/*------Date helper functions------*/
//gets number of days in a certain month
function daysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

//gets number of padding days in a certain month
function getPaddingDays(date) {
  date.setDate(1);
  return date.getDay();
}

/*------UI Functions------*/
function refreshCalendar() {
  //select calendar grid
  const calendar_grid = document.getElementById("calendar-grid");
  //remove all contents from div
  removeChildren(calendar_grid);
  //refresh calendar header
  setDateTitle();
  //recreate calendar grid
  makeCalendarGrid();
}

//set date title to proper month and year
function setDateTitle() {
  const month_header = document.getElementById("date");
  month_header.innerText =
    months[cur_month.getMonth()] + " " + cur_month.getFullYear();
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
function makeCalendarGrid() {
  const calendar_grid = document.getElementById("calendar-grid");
  const padding_days = getPaddingDays(cur_month); //number of days to pad at start of first week
  const days_in_month = daysInMonth(cur_month); //number of days in current month
  calendar_grid.style.setProperty("--grid-rows", rows);
  calendar_grid.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    if (c < padding_days) {
      cell.id = "padding"; //set cell as not in cur month
    } else if (c > days_in_month + padding_days - 1) {
      cell.id = "padding"; //set cell as not in cur month
    } else {
      num_date = c - padding_days + 1;
      cell.id = "day"; //set cell as in cur month
      //set inner text to match dates
      cell.innerText = num_date;
      //highlight todays date
      if (num_date == today.getDate()) {
        cell.id = "today";
      }
    }
    calendar_grid.appendChild(cell).className = "column";
  }
}

//remove all children from a div
function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//functions to run on startup
function startup() {
  makeWeekdayHeader();
  refreshCalendar();
}

startup();
