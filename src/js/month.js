// Month view variables
var cur_month = new Date(); //month of current calendar view
cur_month.setDate(1); //set to first of month to avoid conflict with certain months
var prev_month = new Date(cur_month);
prev_month.setMonth(cur_month.getMonth() - 1);
var next_month = new Date(cur_month);
next_month.setMonth(cur_month.getMonth() + 1)

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

    if (day_list[c].getIsPadding()) {
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

/*------Helper functions------*/
//gets number of padding days before a certain month
function getBeforePaddingDays(date) {
  padding_days = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - first_day_of_week;
  if (padding_days <= 0) padding_days += 7;
  return padding_days;
}

//gets number of padding days after a certain month
function getAfterPaddingDays(date) {
  return 42 - getDaysInMonth(cur_month) - getBeforePaddingDays(cur_month) + first_day_of_week;
}
