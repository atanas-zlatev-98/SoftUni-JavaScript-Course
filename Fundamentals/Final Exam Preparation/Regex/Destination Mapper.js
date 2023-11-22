function destinationMapper(str) {
  let sentence = str;

  let pattern = /([=|\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;

  let match = pattern.exec(sentence);
  let destinations = [];
  let travelPoints = 0;

  while (match !== null) {
    let { destination } = match.groups;
    destinations.push(destination);
    travelPoints += destination.length;

    match = pattern.exec(sentence);
  }

  console.log(`Destinations: ${destinations.join(', ')}`);
  console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("ThisIs some InvalidInput")
