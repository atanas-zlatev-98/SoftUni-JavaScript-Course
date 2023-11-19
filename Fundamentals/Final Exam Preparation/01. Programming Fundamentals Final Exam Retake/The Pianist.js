function thePianist(arr) {
  let numberOfPiece = Number(arr.shift());
  let list = {};

  for (let i = 0; i < numberOfPiece; i++) {
    let current = arr[i].split("|");
    let [piece, composer, key] = current;

    list[piece] = {
      composer,
      key,
    };
  }

  for(let i = 0;i < numberOfPiece;i++){
    arr.shift();
  }

  while (arr[0] !== "Stop") {
    let currentCommand = arr[0].split("|");

    let commad = currentCommand.shift();

    if(commad == 'Add'){
        let [piece,composer,key] = currentCommand;

        if(piece in list){
            console.log(`${piece} is already in the collection!`)
        }else {
            list[piece] = {composer,key}
            console.log(`${piece} by ${composer} in ${key} added to the collection!`)
        }

    }else if(commad == 'Remove'){
        let piece = currentCommand;

        if(piece in list){
            delete list[piece];
            console.log(`Successfully removed ${piece}!`)
        }else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }

    }else if(commad == 'ChangeKey'){

        let [piece,newKey] = currentCommand;

        if(piece in list){
            list[piece]['key'] = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`)
        }else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }

    }

    arr.shift();
  }

  for(let [piece,value] of Object.entries(list)){
    let [composer,key] = Object.entries(value);
    console.log(`${piece} -> Composer: ${composer[1]}, Key: ${key[1]}`);
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
