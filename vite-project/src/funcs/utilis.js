function stringToDate(str) {
  const dateElems = str.split("-");
  const date = new Date(dateElems[0], dateElems[1], dateElems[2]);
  console.log("dateElems????", dateElems);
  console.log("date????", date);
  return date;
}

export { stringToDate };
