function storage(arr){

    let mapOne = new Map();

    for(let products of arr){
        let [product, qua] = products.split(' ');

        qua = Number(qua);

        if(!mapOne.has(product)){
            mapOne.set(product,Number(qua));
        }else {

            let currentQua = mapOne.get(product);
            let newQua = currentQua + qua
            mapOne.set(product,newQua);
        }

    }

  for(let [key,value] of mapOne){
    console.log(`${key} -> ${value}`);
  }

}

storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])

/*storage(['apple 50',

'apple 61',

'coffee 115',

'coffee 40'])*/