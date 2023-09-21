function building(input){
    let x = Number(input[0]);
    let y = Number(input[1]);

    for(let floor = x; floor > 0; floor--){
        let buffer = '';

        for(let room = 0;room < y;room++){
            let ch = '';
            if(floor == x){
                ch = "L"
            }else if(floor % 2 !== 0){
                ch ="A"
            }else {
                ch = 'O'
            }
            buffer += `${ch}${floor}${room} `;
           
        }
        console.log(buffer);
    }

}

building(['6','4']);