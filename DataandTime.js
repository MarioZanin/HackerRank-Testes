function findDay(month, day, year) {
  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.getDay();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[dayOfWeek];
}
