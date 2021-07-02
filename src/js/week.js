/*------UI Functions------*/
//set date title to proper week, month, and year
function setWeekDateTitle() {
  const week_header = document.getElementById("date");
  const week_of_year = getWeekOfYear(cur_week);
  month_header.innerText =
    "Week " +
    cur_week.getWeekOfYear(cur_week) +
    " " +
    months[cur_week.getMonth()] +
    " " +
    cur_month.getFullYear();
}

/*------Helper functions------*/
//gets first day of year
function getFirstDayOfWeek(date) {
  const day = date.getDay();
  var temp_date = new Date(date);
  if (day == first_day_of_week) {
    return temp_date;
  } else if (day > first_day_of_week) {
    // set date to first day of the week and return
    temp_date.setDate(temp_date.getDate() - Math.abs(day - first_day_of_week));
    return temp_date;
  } else if (day < first_day_of_week) {
    temp_date.setDate(
      temp_date.getDate() - Math.abs(7 - day - first_day_of_week)
    );
    return temp_date;
  }
}

//get week of year given a date
function getWeekOfYear(date) {
  start_date = new Date(date.getFullYear(), 1, 1);
  const date_difference = Math.abs(date - start_date); //calculate difference between dates
  const days_difference = Math.ceil(date_difference / (1000 * 60 * 60 * 24)); //convert to days
  const weeks_difference = int(days_difference / 7) + 1;
  return weeks_difference;
}
