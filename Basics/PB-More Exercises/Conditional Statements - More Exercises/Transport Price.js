function price(input) {
  let kilometers = Number(input[0]);
  let dayOrNight = String(input[1]);

  if (kilometers >= 20 && kilometers < 100) {
    console.log((kilometers * 0.09).toFixed(2));
  } else if (kilometers >= 100) {
    console.log((kilometers * 0.06).toFixed(2));
  } else {
    if (dayOrNight == "day") {
      console.log((kilometers * 0.79 + 0.7).toFixed(2));
    } else if (dayOrNight == "night") {
      console.log((kilometers * 0.9 + 0.7).toFixed(2));
    }
  }
}

price([5, "day"]);
price([7, "night"]);
price([25, "day"]);
price([180, "night"]);
