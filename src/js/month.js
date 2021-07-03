// Month view variables
var cur_month; //month of current calendar view
var prev_month;
var next_month;

class Month {
  static initMonths = (date) => {
    cur_month = new Date(date); //copy passed date to be in cur month
    cur_month.setDate(1); //set to first of month to avoid conflict with certain months
    prev_month = new Date(cur_month); //copy cur month to prev month
    prev_month.setMonth(cur_month.getMonth() - 1); //move back prev month by one month
    next_month = new Date(cur_month); //copy cur month to next month
    next_month.setMonth(cur_month.getMonth() + 1); //move forward next month by one month
  };

  //set date title to proper month and year
  static setDateTitle = () => {
    const month_header = document.getElementById("date");
    month_header.innerText =
      months[cur_month.getMonth()].substr(0, 3) + " " + cur_month.getFullYear();
  };

  //create day list for current month
  static createDayList = () => {
    const days_in_cur_month = getDaysInMonth(cur_month);
    const padding_days = this.getPaddingDays(cur_month);

    var temp_date = new Date(cur_month);
    temp_date.setDate(temp_date.getDate() - padding_days);

    for (let c = 0; c < rows * cols; c++) {
      if (temp_date.getMonth() == cur_month.getMonth()) {
        // if date is in month set date and padding as false
        day_list.push(new Day(new Date(temp_date), false));
      } else {
        // if date is not in month set date and padding as true
        day_list.push(new Day(new Date(temp_date), true));
      }
      temp_date.setDate(temp_date.getDate() + 1);
    }
  };

  //get number of days to show before first day of month
  static getPaddingDays = (date) => {
    var padding_days =
      new Date(date.getFullYear(), date.getMonth(), 1).getDay() -
      first_day_of_week;
    if (padding_days <= 0) padding_days += 7;
    return padding_days;
  };

  //increase cur month
  static incMonth = () => {
    prev_month = new Date(cur_month);
    cur_month = new Date(next_month);
    next_month.setMonth(cur_month.getMonth() + 1);
  };

  //decrease cur month
  static decMonth = () => {
    next_month = new Date(cur_month);
    cur_month = new Date(prev_month);
    prev_month.setMonth(cur_month.getMonth() - 1);
  };
}
