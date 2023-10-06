function matrix(number){

    for(let rows = 1; rows <= number;rows++){
        let currentRow = `${number} `.repeat(number);
        console.log(currentRow);
    }

}

matrix(7);