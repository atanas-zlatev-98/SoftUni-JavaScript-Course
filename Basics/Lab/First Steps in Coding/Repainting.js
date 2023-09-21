function repainting(input){
  
    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintTinner = Number(input[2]);
    let hours = Number(input[3]);
    let bag = 0.40;

    let naylonPrice = ((naylon + 2) * 1.50);
    let paintPrice = (((paint * 0.10) + paint) * 14.50);
    let tinnerPrice = paintTinner * 5.00;

    let totalPrice = naylonPrice + paintPrice + tinnerPrice + bag;

    let workersPrice = ((totalPrice * 0.30) * hours);

    let finalPrice = totalPrice + workersPrice;

    console.log(finalPrice);
}