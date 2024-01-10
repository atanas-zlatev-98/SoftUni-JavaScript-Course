function previousDay(year, month, day) {
  const date = new Date(year, month - 1, day - 1);

  let dateYear = date.getFullYear();
  let dateMonth = date.getMonth() + 1;
  let dateDay = date.getDate();

  console.log(`${dateYear}-${dateMonth}-${dateDay}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 1, 10);
