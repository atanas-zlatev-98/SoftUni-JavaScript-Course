function modifier(arr){

    let array = arr.shift().split(' ').map(Number);

    for(let i =0; i < arr.length;i++){
        
        let tokens = arr[i].split(' ');

        let command = tokens[0];
        let indexOne = Number(tokens[1]);
        let indexTwo = Number(tokens[2]);

        if(command == 'swap'){

            let firstIndex = array[indexOne];
            let secondIndex = array[indexTwo];
            array.splice(indexOne,1,secondIndex);
            array.splice(indexTwo,1,firstIndex);
            
        }else if(command == 'multiply'){

            let getFirstElement = array[indexOne];
            let getSecondElement = array[indexTwo];

            let sumElements = getFirstElement * getSecondElement;

            array.splice(indexOne,1,sumElements)

        }else if(command == 'decrease'){

           let decrease = array.map(element => element - 1);

           array = decrease;

        }else if(command == 'end'){
            break;
        }
    }

    console.log(array.join(', '))

}

modifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )