function cityRecord(city,population,treasury) {
    const result = {
        name: city,
        population,
        treasury
    }

    return result
}

console.log(cityRecord(
  "Tortuga",

  7000,

  15000
));
