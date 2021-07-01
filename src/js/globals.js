/*------Global values------*/
//grid size
const cols = 7;
var rows = 6;

//first day of the week
var first_day_of_week = 1;

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

// Week view variables
var cur_week = new Date();
cur_week

// Month view variables
var cur_month = new Date(); //month of current calendar view
cur_month.setDate(1); //set to first of month to avoid conflict with certain months
var prev_month = new Date(cur_month);
prev_month.setMonth(cur_month.getMonth() - 1);
var next_month = new Date(cur_month);
next_month.setMonth(cur_month.getMonth() + 1)
