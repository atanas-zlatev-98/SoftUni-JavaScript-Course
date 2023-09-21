function toto() {
//Toto 3/49
    let counter = 0;
    for (let a = 1; a <= 49; a++) {

        for (let b = 1; b <= 49; b++) {

            for (let c = 1; c <= 49; c++) {
                
                if(a !==b && a !==c && b !== c){
                    counter++;
                    //console.log(`${counter} : ${a},${b},${c}`);
                }

            }
        }

    }
    console.log(counter);

}

toto();