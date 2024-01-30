function solution() {
  let ingredients = {
    carbohydrate: 0,
    flavour: 0,
    fat: 0,
    protein: 0,
  };

  let recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  return (data) => {
    let [command, ingredient, ingredientQty] = data.split(" ");

    switch (command) {
      case "restock":
        return restock(ingredient, ingredientQty);
      case "prepare":
        return prepare(ingredient, ingredientQty);
      case "report":
        return report();
      default:
        break;
    }
  };

  function restock(ingredient, ingredientQty) {

    ingredientQty = Number(ingredientQty);

    if (ingredient in ingredients) {
      ingredients[ingredient] += ingredientQty;
    }

    return "Success";
  }

  function prepare(recipe, quantity) {
    let currentIngridients = {};

    for (let [key, value] of Object.entries(recipes[recipe])) {
      let quantityNeeded = value * Number(quantity);

      if (ingredients[key] < quantityNeeded) {
        return `Error: not enough ${key} in stock`;
      }
      currentIngridients[key] = quantityNeeded;
    }

    for (let [key, value] of Object.entries(currentIngridients)) {
      ingredients[key] -= value;
    }

    return "Success";
  }

  function report() {
   return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
  }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
