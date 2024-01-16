function townPopulation(arr) {
  const result = {};

  for (let line of arr) {
    const [name, pop] = line.split(" <-> ");

    if (result.hasOwnProperty(name) == false) {
      result[name] = 0;
    }
    result[name] += Number(pop);
  }

  for (let [name,poppulation] of Object.entries(result)) {
    console.log(name, ":", poppulation);
  }
}

townPopulation([
  "Sofia <-> 1200000",

  "Montana <-> 20000",

  "New York <-> 10000000",

  "Washington <-> 2345000",

  "Las Vegas <-> 1000000",
]);

townPopulation([
  "Istanbul <-> 100000",

  "Honk Kong <-> 2100004",

  "Jerusalem <-> 2352344",

  "Mexico City <-> 23401925",

  "Istanbul <-> 1000",
]);
