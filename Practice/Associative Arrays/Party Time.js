function partyTime(arr) {
  let guests = [];

  while (arr[0] !== "PARTY") {
    guests.push(arr[0]);
    arr.shift();
  }

  arr.shift();

  for (let guestInList of arr) {
    let idx = guests.indexOf(guestInList);

    if (idx != -1) {
      guests.splice(idx, 1);
    }
  }

  let vips = [];
  let regular = [];

  for (let guest of guests) {
    if (guest.charCodeAt(0) >= 48 && guest.charCodeAt(0) <= 57) {
      vips.push(guest);
    } else {
      regular.push(guest);
    }
  }

  console.log(guests.length);
  if (vips.length > 0) {
    console.log(vips.join("\n"));
  }
  if (regular.length > 0) {
    console.log(regular.join("\n"));
  }
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
