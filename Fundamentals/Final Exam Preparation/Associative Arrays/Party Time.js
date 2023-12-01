function partyTime(arr) {

  let guestList = [];

  while (arr[0] !== "PARTY") {
    guestList.push(arr[0]);
    arr.shift();
  }

  arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let currentGuest = arr[i];

    if (guestList.includes(currentGuest)) {
      let idx = guestList.indexOf(currentGuest);

      if (idx !== -1) {
        guestList.splice(idx, 1);
      }
    }
  }

  let vips = [];
  let regular = [];

  for (let guest of guestList) {
    if (guest.charCodeAt(0) >= 48 && guest.charCodeAt(0) <= 57) {
      vips.push(guest);
    } else {
      regular.push(guest);
    }
  }
  console.log(guestList.length);
  vips.map((vips) => console.log(vips));
  regular.map((regular) => console.log(regular));
}

/*partyTime([
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
*/

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
