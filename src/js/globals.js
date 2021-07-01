/*------Global values------*/
//grid size
const cols = 7;
var rows = 6;

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

const today = new Date(); //today
var cur_month = new Date(); //month of current calendar view
cur_month.setDate(1); //set to first of month to avoid conflict with certain months
