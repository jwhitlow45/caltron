/*------Global values------*/
//grid size
const cols = 7;
var rows = 6;

//cal grid size
var cal_jump_cols = 3;
var cal_jump_rows = 4;

//first day of the week
var first_day_of_week = 0;

display_modes = ["monthly", "weekly"];
cur_display_mode_num = 0;
cur_display_mode = display_modes[cur_display_mode_num];

//list of days
day_list = [];

const calendar = document.getElementById("calendar"); // calendar div

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var today = new Date(); //today
