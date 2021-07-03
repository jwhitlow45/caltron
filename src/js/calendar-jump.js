cur_cal_jump_year = new Date(today.getFullYear(), 1, 1);

function drawMonthSelection() {
  const cal_jump_grid = document.getElementById("cal-jump-grid");

  for (i = 0; i < cal_jump_rows; i++) {
    let cell;
    for (j = 0; j < cal_jump_cols; j++) {
      cell = document.createElement("a");
      cell.innerText = months[i * cal_jump_cols + j].substr(0, 3);
      cell.id = "cal-jump-grid-month";
      cell.className = "cal-month";
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

function calJumpEventListeners() {
  const cal_jump = document.getElementById("calendar-jump-button");
  const cal_jump_left_arrow = document.getElementById("cal-jump-left-arrow");
  const cal_jump_right_arrow = document.getElementById("cal-jump-right-arrow");

  cal_jump.addEventListener("click", toggleCalJumpDropdown);
  cal_jump_left_arrow.addEventListener("click", moveYearLeft);
  cal_jump_right_arrow.addEventListener("click", moveYearRight);
}
