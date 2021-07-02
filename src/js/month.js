// Month view variables
var cur_month = new Date(); //month of current calendar view
cur_month.setDate(1); //set to first of month to avoid conflict with certain months
var prev_month = new Date(cur_month);
prev_month.setMonth(cur_month.getMonth() - 1);
var next_month = new Date(cur_month);
next_month.setMonth(cur_month.getMonth() + 1);

/*------UI Functions------*/
//set date title to proper month and year
function setMonthDateTitle() {
  const month_header = document.getElementById("date");
  month_header.innerText =
    months[cur_month.getMonth()].substr(0, 3) + " " + cur_month.getFullYear();
}

//create day list for current month
function createMonthDayList() {
  const days_in_cur_month = getDaysInMonth(cur_month);
  const padding_days = getPaddingDays(cur_month);

  var temp_date = new Date(cur_month);
  temp_date.setDate(temp_date.getDate() - padding_days);

  for (c = 0; c < rows * cols; c++) {
    if (temp_date.getMonth() == cur_month.getMonth()) {
      // if date is in month set date and padding as false
      day_list.push(new Day(new Date(temp_date), false));
    } else {
      // if date is not in month set date and padding as true
      day_list.push(new Day(new Date(temp_date), true));
    }
    temp_date.setDate(temp_date.getDate() + 1);
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
function getPaddingDays(date) {
  padding_days =
    new Date(date.getFullYear(), date.getMonth(), 1).getDay() -
    first_day_of_week;
  if (padding_days <= 0) padding_days += 7;
  return padding_days;
}
