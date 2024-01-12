function pieceOfPie(pies, startingPie, endingPie) {
  const start = pies.indexOf(startingPie);
  const end = pies.indexOf(endingPie);

  return pies.slice(start, end + 1);
}
console.log(
  pieceOfPie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);
