function commisions(input) {
    let city = input[0];
    let sales = Number(input[1]);

    if (city == 'Sofia') {

        if (sales < 0) {
            console.log('error')
        } else if (sales >= 0 && sales <= 500) {
            console.log((sales * 5 / 100).toFixed(2));

        } else if (sales > 500 && sales <= 1000) {
            console.log((sales * 7 / 100).toFixed(2));

        } else if (sales > 1000 && sales <= 10000) {
            console.log((sales * 8 / 100).toFixed(2));
        } else {
            console.log((sales * 12 / 100).toFixed(2));
        }

    } else if (city == 'Varna') {

        if (sales < 0) {
            console.log('error')
        } else if (sales >= 0 && sales <= 500) {
            console.log((sales * 4.5 / 100).toFixed(2));
        } else if (sales > 500 && sales <= 1000) {
            console.log((sales * 7.5 / 100).toFixed(2));

        } else if (sales > 1000 && sales <= 10000) {
            console.log((sales * 10 / 100).toFixed(2));
        } else {
            console.log((sales * 13 / 100).toFixed(2));
        }

    } else if (city == 'Plovdiv') {


        if (sales < 0) {
            console.log('error')
        } else if (sales >= 0 && sales <= 500) {
            console.log((sales * 5.5 / 100).toFixed(2));
        } else if (sales > 500 && sales <= 1000) {
            console.log((sales * 8 / 100).toFixed(2));
        } else if (sales > 1000 && sales <= 10000) {
            console.log((sales * 12 / 100).toFixed(2));
        } else {
            console.log((sales * 14.5 / 100).toFixed(2));
        }

    } else {
        console.log('error');
    }
}
commisions(["Sofia", "1500"]);
commisions(["Plovdiv", "499.99"]);
commisions(["Varna", "3874.50"]);
commisions(["Kaspichan", "-50"]);