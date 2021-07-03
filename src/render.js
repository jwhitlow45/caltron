/*------Event listeners------*/
const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");
const view_toggle = document.getElementById("view-toggle-button");

left_arrow.addEventListener("click", moveLeft);
right_arrow.addEventListener("click", moveRight);
view_toggle.addEventListener("click", toggleView);

// some event listeners are ran in startup() for dynamically populated elements

/*------Objects------*/
MO = new Month();
CJ = new CalendarJump();

/*------Button behavior------*/
// move calendar back one month
function moveLeft() {
  if (cur_display_mode == "monthly") MO.decMonth();
  else if (cur_display_mode == "weekly") decWeek();
  refreshCalendar();
}

// move calendar forward one month
function moveRight() {
  if (cur_display_mode == "monthly") MO.incMonth();
  else if (cur_display_mode == "weekly") incWeek();
  refreshCalendar();
}

// toggle monthly and weekly view in calendar
function toggleView() {
  cur_display_mode_num = Math.abs(cur_display_mode_num - 1);
  cur_display_mode = display_modes[cur_display_mode_num];
  if (cur_display_mode == "monthly") {
    MO.initMonths(getLastDayOfWeek(cur_week)); //jump months to month of current week
  } else if (
    cur_display_mode == "weekly" &&
    !isSameMonth(getLastDayOfWeek(cur_week), cur_month)
  ) {
    initWeeks(cur_month); //jump weeks to first week of current month
  }
  setCalendarRows(); //change calendar rows to match display mode
  refreshCalendar(); //redraw calendar header and grid
}

/*------Button helper functions------*/


function incWeek() {
  prev_week = new Date(cur_week);
  cur_week = new Date(next_week);
  next_week.setDate(cur_week.getDate() + 7);
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
    MO.setDateTitle();
    //recreate calendar grid
    MO.makeCalendarGrid();
  } else if (cur_display_mode == "weekly") {
    //refresh calendar header
    setWeekDateTitle();
    //recreate calendar grid
    makeWeekCalendarGrid();
  }
}

//functions to run on startup
function startup() {
  MO.initMonths(today);
  initWeeks(today); //init current week
  makeWeekdayHeader(); //draw header with days of week
  refreshCalendar(); //draw calendar
  CJ.drawMonthSelection(); //draw months in cal jump grid
  CJ.drawYear(); //draw year in cal jump grid
  CJ.eventListeners(); //create event listeners for cal jump
}

startup();
