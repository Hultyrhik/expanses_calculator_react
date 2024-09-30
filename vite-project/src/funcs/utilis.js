function stringToDate(str) {
  const dateElems = str.split("-");
  const date = new Date(dateElems[0], dateElems[1], dateElems[2]);
  console.log("dateElems????", dateElems);
  console.log("date????", date);
  return date;
}

function stringYearMonthToDate(str) {
  const dateElems = str.split(".");
  const date = new Date(dateElems[1], dateElems[0]);
  console.log("dateElems????", dateElems);
  console.log("date????", date);
  return date;
}

export { stringToDate, stringYearMonthToDate };
