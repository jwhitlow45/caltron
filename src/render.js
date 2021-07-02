/*------Event listeners------*/
const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");

left_arrow.addEventListener("click", moveLeft);
right_arrow.addEventListener("click", moveRight);

/*------Button behavior------*/
// move calendar back one month
function moveLeft() {
  next_month = new Date(cur_month);
  cur_month = new Date(prev_month);
  prev_month.setMonth(cur_month.getMonth() - 1);
  refreshCalendar();
}

// move calendar forward one month
function moveRight() {
  prev_month = new Date(cur_month);
  cur_month = new Date(next_month);
  next_month.setMonth(cur_month.getMonth() + 1);
  refreshCalendar();
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
  if (cur_display_mode == "weekly") {
    //refresh calendar header
    setWeekDateTitle();

  } else if (cur_display_mode == "monthly") {
    //refresh calendar header
    setMonthDateTitle();
    //recreate calendar grid
    makeMonthCalendarGrid();
  }
}

//functions to run on startup
function startup() {
  makeWeekdayHeader();
  refreshCalendar();
}

startup();
