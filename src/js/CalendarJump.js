// current year showing in calendar jump dropdown
cur_year = new Date(today.getFullYear(), 1, 1);

class CalendarJump {
  // move current year for cal jump back one
  static moveYearLeft = () => {
    cur_year.setFullYear(cur_year.getFullYear() - 1);
    this.drawYear();
  };

  static moveYearRight = () => {
    cur_year.setFullYear(cur_year.getFullYear() + 1);
    this.drawYear();
  };

  // updates calendar jump year innertext to current calendar jump year
  static drawYear = () => {
    document.getElementById("cal-jump-year").innerText = cur_year.getFullYear();
  };

  // creates html for cal jump grid where users select month to jump to
  static drawMonthSelection = () => {
    // select calendar jump grid to insert elements
    const cal_jump_grid = document.getElementById("cal-jump-grid");

    //draw year between arrows
    this.drawYear();

    for (let i = 0; i < cal_jump_rows; i++) {
      let cell; // assert cell to modify and append to calendar jump grid
      for (let j = 0; j < cal_jump_cols; j++) {
        //track current iteration to allow month insertion
        const cur_it = i * cal_jump_cols + j;
        //create anchor and populate with appropriate innertext, id, and class
        cell = document.createElement("a");
        cell.innerText = months[cur_it].substr(0, 3);
        cell.id = "cal-jump-grid-month-" + cur_it;
        cell.className = "cal-jump-month";
        //append to cal jump grid
        cal_jump_grid.appendChild(cell);
      }
      //create line break
      cal_jump_grid.appendChild(document.createElement("br"));
    }
    //add event listeners
    this.eventListeners();
  };

  // toggle calendar jump dropdown when button is clicked
  static toggleDropdown = () => {
    const cal_jump = document.getElementById("cal-jump-grid");
    if (cal_jump.style.visibility == "visible")
      cal_jump.style.visibility = "hidden";
    else cal_jump.style.visibility = "visible";
  };

  // jump to date in calendar
  static jumpToDate = (date) => {
    // jump using cur month if month is being displayed or
    // jump to cur week if week is being displayed
    if (cur_display_mode == "monthly") {
      Month.initMonths(date);
    } else if (cur_display_mode == "weekly") {
      Week.initWeeks(date);
    }
    // close calendar drop down when jump occurs
    this.toggleDropdown();
    // refresh calendar to reflect month change
    refreshCalendar();
  };

  highlightCurrentMonth = () => {};

  //event listeners for calendar jump div
  static eventListeners = () => {
    const cal_jump_button = document.getElementById("cal-jump-button");
    const cal_jump_left_arrow = document.getElementById("cal-jump-left-arrow");
    const cal_jump_right_arrow = document.getElementById(
      "cal-jump-right-arrow"
    );
    const cal_jump_months = Array.prototype.slice.call(
      document.querySelectorAll(".cal-jump-month")
    );

    cal_jump_button.addEventListener("click", this.toggleDropdown);
    cal_jump_left_arrow.addEventListener("click", this.moveYearLeft);
    cal_jump_right_arrow.addEventListener("click", this.moveYearRight);

    const outer_this = this; //store this as element overwrites this
    cal_jump_months.forEach(function (element) {
      element.addEventListener("click", function (event) {
        // strip element id of all non-numeric characters
        var str_month = this.id.replace(/\D/g, "");
        // jump to selected date in calendar jump div
        outer_this.jumpToDate(new Date(cur_year.getFullYear(), str_month, 1));
      });
    });
  };
}
