/*------Date helper functions------*/
//gets number of days in a certain month
function daysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

//gets number of days in a month before a certain month
function daysInPrevMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

//gets number of padding days in a certain month
function getPaddingDays(date) {
  date.setDate(1);
  return date.getDay();
}

/*------HTML helper functions------*/
//remove all children from a div
function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
