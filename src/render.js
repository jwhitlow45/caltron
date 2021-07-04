/*------Event listeners------*/
const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");
const view_toggle = document.getElementById("view-toggle-button");

left_arrow.addEventListener("click", moveLeft);
right_arrow.addEventListener("click", moveRight);
view_toggle.addEventListener("click", toggleView);

// some event listeners are ran in startup() for dynamically populated elements

/*------Button behavior------*/
// move calendar back one month
function moveLeft() {
  if (cur_display_mode == "monthly") Month.decMonth();
  else if (cur_display_mode == "weekly") Week.decWeek();
  refreshCalendar();
}

// move calendar forward one month
function moveRight() {
  if (cur_display_mode == "monthly") Month.incMonth();
  else if (cur_display_mode == "weekly") Week.incWeek();
  refreshCalendar();
}

// toggle monthly and weekly view in calendar
function toggleView() {
  cur_display_mode_num = Math.abs(cur_display_mode_num - 1);
  cur_display_mode = display_modes[cur_display_mode_num];
  if (cur_display_mode == "monthly") {
    Month.initMonths(getLastDayOfWeek(cur_week)); //jump months to month of current week
  } else if (
    cur_display_mode == "weekly" &&
    !isSameMonth(getLastDayOfWeek(cur_week), cur_month)
  ) {
    Week.initWeeks(cur_month); //jump weeks to first week of current month
  }
  setCalendarRows(); //change calendar rows to match display mode
  refreshCalendar(); //redraw calendar header and grid
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

//draw month view grid
function makeCalendarGrid() {
  const calendar_grid = document.getElementById("calendar-grid");

  if (cur_display_mode == "monthly") {
    Month.createDayList();
  } else if (cur_display_mode == "weekly") {
    Week.createDayList();
  }

  calendar_grid.style.setProperty("--grid-rows", rows);
  calendar_grid.style.setProperty("--grid-cols", cols);

  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = day_list[c].getDate().getDate();

    if (day_list[c].getIsPadding() && cur_display_mode == "monthly") {
      // mark as padding day
      cell.id = "padding";
    } else if (isSameDate(day_list[c].getDate(), today)) {
      // mark as today
      cell.id = "today";
    } else {
      // mark as day in cur month
      cell.id = "day";
    }
    calendar_grid.appendChild(cell).className = "column";
  }
}

//refresh calendar to reflect changes from user input
function refreshCalendar() {
  //select calendar grid
  const calendar_grid = document.getElementById("calendar-grid");
  //remove all contents from div
  removeChildren(calendar_grid);
  //clear out day list deleting objects along the way
  day_list.splice(0, day_list.length);
  if (cur_display_mode == "monthly") {
    //refresh calendar header
    Month.setDateTitle();
  } else if (cur_display_mode == "weekly") {
    //refresh calendar header
    Week.setDateTitle();
  }
  //redraw calendar grid
  makeCalendarGrid();
}

//functions to run on startup
function startup() {
  Month.initMonths(today); //init current month
  Week.initWeeks(today); //init current week
  makeWeekdayHeader(); //draw header with days of week
  refreshCalendar(); //draw calendar
  CalendarJump.drawMonthSelection(); //draw months in cal jump grid
}

startup();
