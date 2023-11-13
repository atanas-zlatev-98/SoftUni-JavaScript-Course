function pianist(arr){
    let n = Number(arr.shift());

    let list = {};

    for(let i = 0; i < n;i++){
        let currentPiece = arr[i].split('|');

        let [piece,composer,key] = currentPiece;

        list[piece] = {
            composer,
            key,
        }
    }

    for(let i = 0 ; i < n;i++){
        arr.shift();
    }

    while(arr[0] !== 'Stop'){

        let currentCommand = arr[0].split('|');

        let command = currentCommand.shift();

        if(command == 'Add'){
            let [piece,composer,key] = currentCommand;

            if(piece in list){
             console.log(`${piece} is already in the collection!`)
            }else {
                list[piece] ={ 
                    composer,
                    key
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }

        }else if(command == 'Remove'){
            let piece = currentCommand;

            if(piece in list){
                console.log(`Successfully removed ${piece}!`);
                delete list[piece];
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        }else if(command == 'ChangeKey'){

            let [piece,newKey] = currentCommand;

            if(piece in list){
                list[piece]['key'] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`)
            }else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        }

        arr.shift();
    }

    for(let [key,value] of Object.entries(list)){
        let piece = key;

        let [composer,keys] = Object.entries(value);

        console.log(`${piece} -> Composer: ${composer[1]}, Key: ${keys[1]}`);


        
    }

}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )