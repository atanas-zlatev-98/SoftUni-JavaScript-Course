function adAstra(arr){
    let str = arr.shift();
    let pattern = /([#|\|])(?<product>[A-Za-z\s]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let totalCalories = 0;
    let products = [];
    let match = pattern.exec(str);

    while(match !== null){

        let {product,expdate,calories} = match.groups;

        products.push(`Item: ${product}, Best before: ${expdate}, Nutrition: ${calories}`);
        totalCalories += Number(calories);
        match = pattern.exec(str);
    }

    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);

    for(let product of products){
        console.log(product);
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )

    adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])