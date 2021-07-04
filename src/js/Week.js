// Week view variables
var cur_week; //week of current calendar view
var prev_week;
var next_week;

class Week {
  static initWeeks = (date) => {
    cur_week = getFirstDayOfWeek(new Date(date));
    prev_week = new Date(cur_week);
    prev_week.setDate(cur_week.getDate() - 7);
    next_week = new Date(cur_week);
    next_week.setDate(cur_week.getDate() + 7);
  };

  //set date title to proper month, and year
  static setDateTitle = () => {
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
  };

  //create day list for current week
  static createDayList = () => {
    var cur_day = new Date(cur_week);
    for (let c = 0; c < rows * cols; c++) {
      day_list.push(new Day(new Date(cur_day), false));
      cur_day.setDate(cur_day.getDate() + 1);
    }
  };

  //increase current week
  static incWeek() {
    prev_week = new Date(cur_week);
    cur_week = new Date(next_week);
    next_week.setDate(cur_week.getDate() + 7);
  }
  //decrease current week
  static decWeek() {
    next_week = new Date(cur_week);
    cur_week = new Date(prev_week);
    prev_week.setDate(cur_week.getDate() - 7);
  }
}
