class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }
  reserveABottle(wineName, wineType, price) {
    if (this.space === this.wines.length) {
      throw new Error("Not enough space in cellar.");
    }
    let result = {
      wineName,
      wineType,
      price,
      paid: false,
    };

    this.wines.push(result);
    return `You reserved a bottle of ${wineName} ${wineType} wine.`
  }

  payWineBottle(wineName,price){
    let currentWine = this.wines.find(a => a.wineName === wineName);
    if(!currentWine){
        throw new Error(`${wineName} is not in the cellar.`);
    }

    if(currentWine.paid){
        throw new Error(`${wineName} has already been paid.`)
    }

    currentWine.paid = true;
    this.bill += price;

    return `You bought a ${wineName} for a ${price}.`
  }

  openBottle(wineName){
    let currentWine = this.wines.find(x => x.wineName === wineName);

    if(!currentWine){
        throw new Error(`The wine you are looking for, is not found.`)
    }
    if(!currentWine.paid){
        throw new Error(`${wineName} need to be paid before open the bottle.`);
    }

    this.wines = this.wines.filter(x => x.wineName !== wineName);
    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType){
    if(wineType){
        let currentWine = this.wines.find(x=>x.wineType === wineType);

        if(!currentWine){
            throw new Error(`There is no ${wineType} in the cellar.`)
        }

        return `${currentWine.wineName} > ${wineType} > ${currentWine.paid ? 'Has Paid' : 'Not Paid'}.`
    }

    let buff = `You have space for ${this.space} bottles more.\n`;
    buff += `You paid ${this.bill}$ for the wine\n`;

    this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName)).forEach(x=>{
        buff += `${x.wineName} > ${x.wineType} - ${x.paid ?'Has Paid' : 'Not Paid'}.\n`;
    })

    return buff.trim();

  }

}
