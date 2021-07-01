/*------Date helper functions------*/
//gets number of days in a certain month
function getDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

//gets number of padding days before a certain month
function getBeforePaddingDays(date) {
  padding_days = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  if (padding_days == 0) padding_days = 7;
  return padding_days;
}

//gets number of padding days after a certain month
function getAfterPaddingDays(date) {
  return 42 - getDaysInMonth(cur_month) - getBeforePaddingDays(cur_month);
}

/*------HTML helper functions------*/
//remove all children from a div
function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
