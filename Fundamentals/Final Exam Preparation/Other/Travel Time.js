function travelTime(arr) {
  let places = {};

  for (let place of arr) {
    let [placeName, placeTown, placeCost] = place.split(" > ");
    placeCost = Number(placeCost);
    if (!places.hasOwnProperty(placeName)) {
      places[placeName] = {};
    }

    if (!places[placeName].hasOwnProperty(placeTown)) {
      places[placeName][placeTown] = placeCost;
    }

    let oldPrice = places[placeName][placeTown];
    if (oldPrice > placeCost) {
      places[placeName][placeTown] = placeCost;
    }
  }

  let sorted = Object.entries(places).sort((a, b) => a[0].localeCompare(b[0]));

  for(let [country,towns] of sorted){

    let sortedTowns = Object.entries(towns).sort((a, b) => a[1] - b[1]);

    let countryDestination = `${country} -> `;

    sortedTowns.map(([town, price]) => {
        countryDestination += `${town} -> ${price} `;
      });

    console.log(`${countryDestination}`);

  }
}

travelTime([
  "Bulgaria > Sofia > 500",

  "Bulgaria > Sopot > 800",

  "France > Paris > 2000",

  "Albania > Tirana > 1000",

  "Bulgaria > Sofia > 200",
]);
