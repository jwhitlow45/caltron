/*------Event listeners------*/
const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");

left_arrow.addEventListener("click", moveLeft);
right_arrow.addEventListener("click", moveRight);

/*------Button behavior------*/
// move calendar back one month
function moveLeft() {
  if (cur_display_mode == "monthly") decMonth();
  else if (cur_display_mode == "weekly") decWeek();
  refreshCalendar();
}

// move calendar forward one month
function moveRight() {
  if (cur_display_mode == "monthly") incMonth();
  else if (cur_display_mode == "weekly") incWeek();
  refreshCalendar();
}

function incMonth() {
  prev_month = new Date(cur_month);
  cur_month = new Date(next_month);
  next_month.setMonth(cur_month.getMonth() + 1);
}

function decMonth() {
  next_month = new Date(cur_month);
  cur_month = new Date(prev_month);
  prev_month.setMonth(cur_month.getMonth() - 1);
}

function incWeek() {
  prev_week = new Date(cur_week);
  cur_week = new Date(next_week);
  next_week.setDate(cur_week.getDate() + 7);
  if (cur_week.getMonth() == 11 && next_week.getMonth() == 0)
    next_week.setFullYear(next_week.getFullYear() + 1);
}

function decWeek() {
  next_week = new Date(cur_week);
  cur_week = new Date(prev_week);
  prev_week.setDate(cur_week.getDate() - 7);
}

/*------UI Functions------*/
//refresh calendar state
//creates header with weekday titles
function makeWeekdayHeader() {
  const weekday_header = document.getElementById("weekday-header");
  for (i = 0; i < 7; i++) {
    let day = document.createElement("div");
    day.innerText = days[(i + first_day_of_week) % 7];
    day.id = "weekday-text";
    weekday_header.appendChild(day);
  }
}

function refreshCalendar() {
  //select calendar grid
  const calendar_grid = document.getElementById("calendar-grid");
  //remove all contents from div
  removeChildren(calendar_grid);
  //clear out day list deleting objects along the way
  day_list.splice(0, day_list.length);
  if (cur_display_mode == "monthly") {
    //refresh calendar header
    setMonthDateTitle();
    //recreate calendar grid
    makeMonthCalendarGrid();
  } else if (cur_display_mode == "weekly") {
    //refresh calendar header
    setWeekDateTitle();
  }
}

//functions to run on startup
function startup() {
  makeWeekdayHeader();
  refreshCalendar();
}

startup();
