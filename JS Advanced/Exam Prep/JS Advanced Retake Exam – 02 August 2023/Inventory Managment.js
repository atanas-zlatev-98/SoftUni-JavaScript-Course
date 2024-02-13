class InventoryManager {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.outOfStock = [];
  }

  addItem(itemName, quantity) {
    quantity = Number(quantity);

    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    if (this.items.length === this.capacity) {
      throw new Error("The inventory is already full.");
    }

    const currentItem = this.items.find((x) => x.itemName === itemName);

    if (currentItem) {
      currentItem.quantity += quantity;
    } else {
      this.items.push({ itemName, quantity });
      return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }
  }

  sellItem(itemName, quantity) {
    quantity = Number(quantity);

    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    let currentItem = this.items.find((x) => x.itemName === itemName);

    if (!currentItem) {
      throw new Error(
        `The item ${itemName} is not available in the inventory.`
      );
    }

    if (currentItem.quantity < quantity) {
      throw new Error(`Not enough ${itemName}(s) in stock.`);
    }

    currentItem.quantity -= quantity;

    if (currentItem.quantity <= 0) {
      this.outOfStock.push(currentItem);
      this.items = this.items.filter(
        (x) => x.itemName !== currentItem.itemName
      );
    }

    return `Sold ${quantity} ${itemName}(s) from the inventory.`;
  }

  restockItem(itemName, quantity) {
    quantity = Number(quantity);

    let currentItem = this.items.find((x) => x.itemName === itemName);
    let outOfStockItem = this.outOfStock.find((x) => x.itemName === itemName);

    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    if (currentItem) {
      currentItem.quantity += quantity;
    } else {
      this.items.push({ itemName, quantity });
    }

    if (outOfStockItem) {
      this.outOfStock = this.outOfStock.filter((x) => x.itemName !== outOfStockItem.itemName);
    }

    return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
  }

  getInventorySummary() {
    let products = "";
    let outOfStockProducts = [];
    for (let values of Object.values(this.items)) {
      products += `${values.itemName}: ${values.quantity}\n`;
    }

    for (let values of Object.values(this.outOfStock)) {
      outOfStockProducts.push(values.itemName);
    }
    debugger
    return `Current Inventory:\n${products.trim()}${outOfStockProducts.length > 0 ? `\nOut of Stock: ${outOfStockProducts.join(", ")}` : ''}`;
  }
}
const myManager = new InventoryManager(3);
console.log(
  myManager.addItem("Hammer", 10),
  "Added 10 Hammer(s) to the inventory."
);
console.log(
  myManager.sellItem("Hammer", 10),
  "Sold 10 Hammer(s) from the inventory."
);
console.log(
  myManager.restockItem("Chisel", 5),
  "Restocked 5 Chisel(s) in the inventory."
);
console.log(
  myManager.restockItem("Drill", 1),
  "Restocked 1 Drill(s) in the inventory."
);

console.log(myManager.getInventorySummary());
