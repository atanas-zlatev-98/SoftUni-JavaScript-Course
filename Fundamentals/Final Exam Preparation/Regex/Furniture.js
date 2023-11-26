function furniture(arr) {

  let pattern =/>>(?<name>[A-Za-z]+)<<(?<price>[0-9]+\.?\d+)!(?<quantity>[0-9]+)/;
  let totalCost = 0;
  let boughtFurniture = [];
  
  while (arr[0] !== "Purchase") {

    let currentProduct = arr[0];
    let match = pattern.exec(currentProduct);

    if (match) {
      let { name, price, quantity } = match.groups;
      totalCost += Number(price) * Number(quantity);
      boughtFurniture.push(name);
    }

    arr.shift();
  }

  console.log(`Bought furniture: `);
  for (let furniture of boughtFurniture) {
    console.log(furniture);
  }

  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);
