function roadRadar(speed, area) {
    
  switch (area) {
    case "motorway":
      zone(130, speed);
      break;
    case "interstate":
      zone(90, speed);
      break;
    case "city":
      zone(50, speed);
      break;
    default:
      zone(20, speed);
  }

  function zone(limit, speed) {

    if (speed <= limit) {
      console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
      let difference = speed - limit;
      console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${speedStatus(difference)}`);
    }
  }

  function speedStatus(speed) {
    let status;
    if (speed <= 20) {
      status = "speeding";
    } else if (speed <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
    return status;
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
