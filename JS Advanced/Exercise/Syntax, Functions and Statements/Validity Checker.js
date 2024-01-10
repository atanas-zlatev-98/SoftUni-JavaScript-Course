function validityChecker(x1, y1, x2, y2) {

  function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }

  const x1_y1 = distance(x1,y1,0,0);
  console.log(Number.isInteger(x1_y1) ? `{${x1}, ${y1}} to {0, 0} is valid` : `{${x1}, ${y1}} to {0, 0} is invalid`);

  const x2_y2 = distance(x2,y2,0,0);
  console.log(Number.isInteger(x2_y2) ? `{${x2}, ${y2}} to {0, 0} is valid` : `{${x2}, ${y2}} to {0, 0} is invalid`);

  const x1_y1_x2_y2 = distance(x1,y1,x2,y2);
  console.log(Number.isInteger(x1_y1_x2_y2) ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

}

validityChecker(2, 1, 1, 1);
