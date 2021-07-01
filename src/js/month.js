/*------UI Functions------*/
//set date title to proper month and year
function setMonthDateTitle() {
  const month_header = document.getElementById("date");
  month_header.innerText =
    months[cur_month.getMonth()] + " " + cur_month.getFullYear();
}

//create day list for current month
function createMonthDayList() {
  const days_in_cur_month = getDaysInMonth(cur_month);
  const days_in_prev_month = getDaysInMonth(prev_month);
  const before_padding_days = getBeforePaddingDays(cur_month);
  for (c = 0; c < rows * cols; c++) {
    if (c < padding_days) {
      // if current iteration is before current month
      // create new date corresponding to current iteration
      temp_date = new Date(
        prev_month.getFullYear(),
        prev_month.getMonth(),
        days_in_prev_month + c - before_padding_days + 1
      );
      // push to day list
      day_list.push(new Day(temp_date, true));
    } else if (c > days_in_cur_month + before_padding_days - 1) {
      //if current iteration is after current month
      // create new date corresponding to current iteration
      temp_date = new Date(
        next_month.getFullYear(),
        next_month.getMonth(),
        c - days_in_cur_month - before_padding_days + 1
      );
      // push to day list
      day_list.push(new Day(temp_date, true));
    } else {
      //if current iteration is in current month
      // create new date corresponding to current iteration
      temp_date = new Date(
        cur_month.getFullYear(),
        cur_month.getMonth(),
        c - before_padding_days + 1
      );
      // push to day list
      day_list.push(new Day(temp_date, false));
    }
  }
}

//draw month view grid
function makeMonthCalendarGrid() {
  const calendar_grid = document.getElementById("calendar-grid");

  createMonthDayList();

  calendar_grid.style.setProperty("--grid-rows", rows);
  calendar_grid.style.setProperty("--grid-cols", cols);

  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = day_list[c].getDate().getDate();
    if (day_list[c].getIsPadding()) cell.id = "padding";
    else if (day_list[c].getDate() == today) cell.id = "today";
    else cell.id = "day";

    calendar_grid.appendChild(cell).className = "column";
  }
}
