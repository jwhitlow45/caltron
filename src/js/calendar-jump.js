cur_cal_jump_year = new Date(today.getFullYear(), 1, 1);

function drawMonthSelection() {
  const cal_jump_grid = document.getElementById("cal-jump-grid");

  for (i = 0; i < cal_jump_rows; i++) {
    let cell;
    for (j = 0; j < cal_jump_cols; j++) {
      cell = document.createElement("a");
      cell.innerText = months[i * cal_jump_cols + j].substr(0, 3);
      cal_jump_grid.appendChild(cell).id = "cal-jump-grid-element";
    }
    cal_jump_grid.appendChild(document.createElement("br"));
  }
}

function drawCalJumpYear() {
  document.getElementById("cal-jump-year").innerText = cur_cal_jump_year.getFullYear();
}
