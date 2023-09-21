function basketballEquip(input){
    let taxPrice = Number(input[0]);

    let sneakersPrice = taxPrice - (taxPrice * 0.40);
    let outfitPrice = sneakersPrice - (sneakersPrice * 0.20);
    let ballPrice = outfitPrice / 4;
    let accessoriesPrice = ballPrice / 5;

    let totalOutfitPrice = sneakersPrice +outfitPrice +ballPrice +accessoriesPrice;
    
    let totalPrice = taxPrice + totalOutfitPrice;
    console.log(totalPrice);

}