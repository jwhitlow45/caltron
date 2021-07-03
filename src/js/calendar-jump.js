cur_cal_jump_year = new Date(today.getFullYear(), 1, 1);

function drawMonthSelection() {
  const cal_jump_grid = document.getElementById("cal-jump-grid");

  for (i = 0; i < cal_jump_rows; i++) {
    let cell;
    for (j = 0; j < cal_jump_cols; j++) {
      const cur_it = i * cal_jump_cols + j;
      cell = document.createElement("a");
      cell.innerText = months[cur_it].substr(0, 3);
      cell.id = "cal-jump-grid-month-" + cur_it;
      cell.className = "cal-jump-month";
      cal_jump_grid.appendChild(cell);
    }
    cal_jump_grid.appendChild(document.createElement("br"));
  }
}

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

function jump_to_date(date) {
  if (cur_display_mode == "monthly") {
    cur_month = new Date(date);
  } else if (cur_display_mode == "weekly") {
    cur_week = new Date(getFirstDayOfWeek(date));
  }
  toggleCalJumpDropdown();
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
      var str_month = this.id.replace(/\D/g, "");
      jump_to_date(new Date(cur_cal_jump_year.getFullYear(), str_month, 1));
    });
  });
}
