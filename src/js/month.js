/*------UI Functions------*/
//set date title to proper month and year
function setMonthDateTitle() {
  const month_header = document.getElementById("date");
  month_header.innerText =
    months[cur_month.getMonth()] + " " + cur_month.getFullYear();
}

// draw month view grid
function makeMonthCalendarGrid() {
  const calendar_grid = document.getElementById("calendar-grid");
  const padding_days = getPaddingDays(cur_month); //number of days to pad at start of first week
  const days_in_month = daysInMonth(cur_month); //number of days in current month
  const days_in_prev_month = daysInPrevMonth(cur_month); //number of days in previous month
  calendar_grid.style.setProperty("--grid-rows", rows);
  calendar_grid.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    if (c < padding_days) {
      cell.id = "padding"; //set cell as not in cur month
      cell.innerText = days_in_prev_month + c - padding_days + 1;
    } else if (c > days_in_month + padding_days - 1) {
      cell.id = "padding"; //set cell as not in cur month
      cell.innerText = c - days_in_month - padding_days + 1;
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