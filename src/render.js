/*------Global values------*/
//grid size
const cols = 7;
const rows = 6;

/*------Event listeners------*/
const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");

left_arrow.addEventListener("click", moveLeft);
right_arrow.addEventListener("click", moveRight);

/*------Button behavior------*/
// move calendar back one month
function moveLeft() {
  cur_month.setMonth(cur_month.getMonth() - 1);
  refreshCalendar();
}

// move calendar forward one month
function moveRight() {
  cur_month.setMonth(cur_month.getMonth() + 1);
  refreshCalendar();
}

//functions to run on startup
function startup() {
  makeWeekdayHeader();
  refreshCalendar();
}

startup();
