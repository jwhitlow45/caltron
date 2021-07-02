// Week view variables
var cur_week = getFirstDayOfWeek(new Date());
var prev_week = new Date(cur_week);
prev_week.setDate(cur_week.getDate() - 7);
var next_week = new Date(cur_week);
next_week.setDate(cur_week.getDate() + 7);

/*------UI Functions------*/
//set date title to proper month, and year
function setWeekDateTitle() {
  const week_header = document.getElementById("date");
  const first_day_of_week = getFirstDayOfWeek(cur_week);
  const last_day_of_week = getLastDayOfWeek(cur_week);
  var header_string = "";

  //add month of first day of week
  header_string += months[cur_week.getMonth()].substr(0, 3) + " ";
  //add year to first month if week covers two years
  if (first_day_of_week.getFullYear() != last_day_of_week.getFullYear())
    header_string += first_day_of_week.getFullYear() + " ";
  //add second month if week covers two months
  if (first_day_of_week.getMonth() != last_day_of_week.getMonth())
    header_string +=
      "- " + months[last_day_of_week.getMonth()].substr(0, 3) + " ";
  header_string += last_day_of_week.getFullYear();

  week_header.innerText = header_string;
}

//create day list for current week
function createWeekDayList() {
  var cur_day = new Date(cur_week);
  for (c = 0; c < rows * cols; c++) {
    day_list.push(new Day(new Date(cur_day), false));
    cur_day.setDate(cur_day.getDate() + 1);
  }
}

//draw week view grid
function makeWeekCalendarGrid() {
  const calendar_grid = document.getElementById("calendar-grid");

  createWeekDayList();

  calendar_grid.style.setProperty("--grid-rows", rows);
  calendar_grid.style.setProperty("--grid-cols", cols);

  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = day_list[c].getDate().getDate();

    if (isSameDate(day_list[c].getDate(), today)) {
      cell.id = "today";
    } else {
      cell.id = "day";
    }

    calendar_grid.appendChild(cell).className = "column";
  }
}

/*------Helper functions------*/
//gets first day of week
function getFirstDayOfWeek(date) {
  const day = date.getDay();
  var temp_date = new Date(date);

  // set date to first day of the week and return
  if (day > first_day_of_week) {
    temp_date.setDate(temp_date.getDate() - Math.abs(day - first_day_of_week));
  } else if (day < first_day_of_week) {
    temp_date.setDate(
      temp_date.getDate() - Math.abs(7 + day - first_day_of_week)
    );
  }
  return temp_date;
}

function getLastDayOfWeek(date) {
  var temp_date = getFirstDayOfWeek(date);
  temp_date.setDate(temp_date.getDate() + 6);
  return temp_date;
}

//get week of year given a date
function getWeekOfYear(date) {
  start_date = new Date(date.getFullYear(), 0, 1);
  const date_difference = Math.abs(date - start_date); //calculate difference between dates
  const days_difference = Math.ceil(date_difference / (1000 * 60 * 60 * 24)); //convert to days
  const weeks_difference = Math.trunc(days_difference / 7) + 1;
  return weeks_difference;
}
