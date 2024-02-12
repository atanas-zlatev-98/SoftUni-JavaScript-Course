class WineSelection {
    wines = [];
    bill = 0;
    constructor(space) {
      this.space = space;
    }
  
    reserveABottle(wineName, wineType, price) {
      price = Number(price);
  
      if (this.space <= 0) {
        throw new Error("Not enough space in the cellar.");
      } else {
        this.wines.push({ wineName, wineType, price, paid: false });
        this.space -= 1;
  
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
      }
    }
  
    payWineBottle(wineName, price) {
      price = Number(price);
      if (typeof wineName !== "string" || typeof price !== "number") {
        return;
      }
  
      for (let [key, value] of Object.entries(this.wines)) {
        if (value.wineName == wineName && value.paid == true) {
          throw new Error(`${wineName} has already been paid.`);
        }
        if (value.wineName == wineName && value.paid == false) {
          this.bill += price;
          value.paid = true;
          return `You bought a ${wineName} for a ${price}$.`;
        }
      }
  
      throw new Error(`${wineName} is not in the cellar.`);
    }
  
    openBottle(wineName){
  
      for(let value of Object.values(this.wines)){
  
          if(value.wineName == wineName && value.paid == true){
              return `You drank a bottle of ${wineName}.`
          }
  
          if(value.wineName == wineName && value.paid == false){
              throw new Error(`${wineName} need to be paid before open the bottle.`);
          }
      }
  
      return `The wine, you're looking for, is not found.`
      
    }
  
    cellarRevision(wineType) {
      let buff = "";
      if (!wineType) {
        let sorted = this.wines.sort((a, b) =>
          a.wineName.localeCompare(b.wineName)
        );
        for (let [key, value] of Object.entries(sorted)) {
          buff += `${value.wineName} > ${value.wineType} - ${
            value.paid ? "Has Paid" : "Not Paid"
          }.\n`;
        }
  
        return (
          `You have space for ${this.space} bottles more.\n` +
          `You paid ${this.bill}$ for the wine.\n` +
          buff.trim()
        );
      } else {
        for (let [key, value] of Object.entries(this.wines)) {
          if (wineType == value.wineType) {
            buff += `${value.wineName} > ${value.wineType} - ${
              value.paid ? "Has Paid" : "Not Paid"
            }.\n`;
          } else {
            throw new Error(`There is no ${wineType} in the cellar.`);
          }
        }
      }
  
      return buff.trim();
    }
  }


const selection = new WineSelection(5)

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);

selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50); 
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
 console.log(selection.cellarRevision());