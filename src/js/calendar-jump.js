// current year showing in calendar jump dropdown
cur_cal_jump_year = new Date(today.getFullYear(), 1, 1);

// creates html for cal jump grid where users select month to jump to
function drawMonthSelection() {
  // select calendar jump grid to insert elements
  const cal_jump_grid = document.getElementById("cal-jump-grid");

  for (i = 0; i < cal_jump_rows; i++) {
    let cell; // assert cell to modify and append to calendar jump grid
    for (j = 0; j < cal_jump_cols; j++) {
      //track current iteration to allow month insertion
      const cur_it = i * cal_jump_cols + j;
      //create anchor and populate with appropriate innertext, id, and class
      cell = document.createElement("a");
      cell.innerText = months[cur_it].substr(0, 3);
      cell.id = "cal-jump-grid-month-" + cur_it;
      cell.className = "cal-jump-month";
      //append to cal jump grid
      cal_jump_grid.appendChild(cell);
    }
    //create line break
    cal_jump_grid.appendChild(document.createElement("br"));
  }
}

// updates calendar jump year innertext to current calendar jump year
function drawCalJumpYear() {
  document.getElementById("cal-jump-year").innerText =
    cur_cal_jump_year.getFullYear();
}

// toggle calendar jump dropdown when button is clicked
function toggleCalJumpDropdown() {
  const cal_jump = document.getElementById("cal-jump-grid");
  if (cal_jump.style.visibility == "visible")
    cal_jump.style.visibility = "hidden";
  else cal_jump.style.visibility = "visible";
}

// jump to date in calendar
function jump_to_date(date) {
  // jump using cur month if month is being displayed or
  // jump to cur week if week is being displayed
  if (cur_display_mode == "monthly") {
    cur_month = new Date(date);
  } else if (cur_display_mode == "weekly") {
    cur_week = new Date(getFirstDayOfWeek(date));
  }
  // close calendar drop down when jump occurs
  toggleCalJumpDropdown();
  // refresh calendar to reflect month change
  refreshCalendar();
}

//event listeners for calendar jump div
function calJumpEventListeners() {
  const cal_jump = document.getElementById("calendar-jump-button");
  const cal_jump_left_arrow = document.getElementById("cal-jump-left-arrow");
  const cal_jump_right_arrow = document.getElementById("cal-jump-right-arrow");
  const cal_jump_months = Array.prototype.slice.call(
    document.querySelectorAll(".cal-jump-month")
  );

  cal_jump.addEventListener("click", toggleCalJumpDropdown);
  cal_jump_left_arrow.addEventListener("click", moveYearLeft);
  cal_jump_right_arrow.addEventListener("click", moveYearRight);

  cal_jump_months.forEach(function (element) {
    element.addEventListener("click", function (event) {
      // strip element id of all non-numeric characters
      var str_month = this.id.replace(/\D/g, "");
      // jump to selected date in calendar jump div
      jump_to_date(new Date(cur_cal_jump_year.getFullYear(), str_month, 1));
    });
  });
}
