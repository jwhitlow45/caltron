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

/*------HTML helper functions------*/
//remove all children from a div
function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
