function cinema(input) {
    let project = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let ticket = 0;

    switch (project) {
        case 'Premiere':
            ticket += 12;
            break;
        case 'Normal':
            ticket += 7.50;
            break;
        case 'Discount':
            ticket += 5;
            break;
        default:
            console.log('invalid project')
            break;
    }

    let total = (rows * columns) * ticket;

    console.log(`${(total).toFixed(2)} leva`);
}

cinema(['Premiere','10','12']);
cinema(['Normal','21','13']);
cinema(['Discount','12','30']);