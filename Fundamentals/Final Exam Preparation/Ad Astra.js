function adAstra(arr){
    let sentence = arr.shift();

    let totalCalories = 0;

    let pattern = /(#|\|)(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let match = pattern.exec(sentence);

    let products = [];

    if(match){
        
        while(match !== null){

            let {item,date,calories} = match.groups;
            products.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
            totalCalories += Number(calories);

            match = pattern.exec(sentence);
        }


        console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);

        for(let product of products){
            console.log(product);
        }

    }else {
        console.log(`You have food to last you for: 0 days!`);
    }
    


}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )