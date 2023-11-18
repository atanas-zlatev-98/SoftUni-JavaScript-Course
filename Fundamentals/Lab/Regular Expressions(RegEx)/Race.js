function race(arr) {
  let competitors = arr.shift().split(", ");

  let patternChars = /[A-Za-z]+/g;
  let patternNumbers = /\d/g;

  let letsRace = {};

  while (arr[0] !== "end of race") {
    let currentParticipant = arr[0];

    let matchName = currentParticipant.match(patternChars);
    let matchPoints = currentParticipant.match(patternNumbers);

    if (matchName && matchPoints) {
      let name = matchName.join("");
      let points = matchPoints.map(Number).reduce((acc, val) => acc + val);

      if (competitors.includes(name)) {
        if (name in letsRace) {
          letsRace[name] += points;
        } else {
          letsRace[name] = points;
        }
      }
    }

    arr.shift();
  }
  let sorted = Object.entries(letsRace).sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}
race([
  "Ronald, Bill, Tom, Timmy,Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",

  "%$$B(*&&)i89ll)*&) ",

  "R**(on%^&ald992) ",

  "T(*^^%immy77) ",

  "Ma10**$#g0g0g0i0e",

  "end of race",
]);
