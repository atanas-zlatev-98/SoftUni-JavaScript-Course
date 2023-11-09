function meetings(arr) {
  let meetings = {};

  for (let meeting of arr) {
    let [weekday, person] = meeting.split(" ");

    if (weekday in meetings) {
      console.log(`Conflict on ${weekday}!`);
    } else {
      meetings[weekday] = person;
      console.log(`Scheduled for ${weekday}`);
    }
  }

  for (let [day, name] of Object.entries(meetings)) {
    console.log(`${day} -> ${name}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
