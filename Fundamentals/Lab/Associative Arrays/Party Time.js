function partyTime(arr) {

    let list = [];

  while (arr[0] !== "PARTY") {
    list.push(arr.shift());
  }

  arr.shift();

  for (let guest of arr) {
    let idx = list.indexOf(guest);
    if(idx != -1){
        list.splice(idx,1);
    }
  }

  let vips = [];
  let regular = [];

  for (let name of list) {
    if (name.charCodeAt(0) >= 48 && name.charCodeAt(0) <= 57) {
      vips.push(name);
    } else {
      regular.push(name);
    }
  }

  console.log(list.length);

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
