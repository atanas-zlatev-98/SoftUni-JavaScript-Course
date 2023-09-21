function fruitMarket(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    switch (dayOfWeek) {

        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':

            if (fruit == 'banana') {
                console.log(price = (quantity * 2.50).toFixed(2));
            } else if (fruit == 'apple') {
                console.log(price = (quantity * 1.20).toFixed(2));
            } else if (fruit == 'orange') {
                console.log(price = (quantity * 0.85).toFixed(2));
            } else if (fruit == 'grapefruit') {
                console.log(price = (quantity * 1.45).toFixed(2));
            } else if (fruit == 'kiwi') {
                console.log(price = (quantity * 2.70).toFixed(2));
            } else if (fruit == 'pineapple') {
                console.log(price = (quantity * 5.50).toFixed(2));
            } else if (fruit == 'grapes') {
                console.log(price = (quantity * 3.85).toFixed(2));
            } else {
                console.log('error');
            }

            break;

        case 'Saturday':
        case 'Sunday':

            if (fruit == 'banana') {
                console.log(price = (quantity * 2.70).toFixed(2));
            } else if (fruit == 'apple') {
                console.log(price = (quantity * 1.25).toFixed(2));
            } else if (fruit == 'orange') {
                console.log(price = (quantity * 0.90).toFixed(2));
            } else if (fruit == 'grapefruit') {
                console.log(price = (quantity * 1.60).toFixed(2));
            } else if (fruit == 'kiwi') {
                console.log(price = (quantity * 3.00).toFixed(2));
            } else if (fruit == 'pineapple') {
                console.log(price = (quantity * 5.60).toFixed(2));
            } else if (fruit == 'grapes') {
                console.log(price = (quantity * 4.20).toFixed(2));
            } else {
                console.log('error')
            }
            break;
        default:
            console.log('error');
            break;

    }

}

fruitMarket(["apple", "Tuesday", "2"]);
fruitMarket(["orange", "Sunday", "3"]);
fruitMarket(["kiwi", "Monday", "2.5"]);
fruitMarket(["grapes", "Saturday", "0.5"]);
fruitMarket(["tomato", "Monday", "0.5"]);
fruitMarket(["beer", 'Friday', '3']);
