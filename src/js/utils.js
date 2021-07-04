/*------Date helper functions------*/
//gets number of days in a certain month
function getDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

//check if two dats have the same day, month, and year
function isSameDate(first_date, second_date) {
  return (
    first_date.getDate() == second_date.getDate() &&
    first_date.getMonth() == second_date.getMonth() &&
    first_date.getFullYear() == second_date.getFullYear()
  );
}

function isSameMonth(first_date, second_date) {
  return (
    first_date.getMonth() == second_date.getMonth() &&
    first_date.getFullYear() == second_date.getFullYear()
  );
}

//set calendar rows based on display mode
function setCalendarRows() {
  if (cur_display_mode == "monthly") rows = 6;
  else if (cur_display_mode == "weekly") rows = 1;
}

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
  var temp_date = this.getFirstDayOfWeek(date);
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

/*------HTML helper functions------*/
//remove all children from a div
function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
