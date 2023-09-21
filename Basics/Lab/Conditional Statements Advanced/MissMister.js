function missMister(input){
    let age = Number(input[0]);
    let gender = input[1];

    if(gender == 'm'){
        if(age >= 16) {
            console.log('Mr.')
        }else {
            console.log('Master');
        }
    }else if(gender == 'f'){
        if(age >= 16){
            console.log('Ms.')
        }else {
            console.log('Miss')
        }

    }else{
        console.log('No such gender');
    }
}

missMister(['12','f']);
missMister(['17','m']);
missMister(['25','f']);
missMister(['13.5','m']);
