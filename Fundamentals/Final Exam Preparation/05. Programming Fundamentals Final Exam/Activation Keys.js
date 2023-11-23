function activationKeys(arr){
let key = arr.shift();

while(arr[0] !== 'Generate'){
let currentCommand = arr[0].split('>>>');

let command = currentCommand.shift();

if(command == 'Slice'){

    let [startIdx,endIdx] = currentCommand.map(Number);

    let leftSide = key.slice(0,startIdx);
    let rightSide = key.slice(endIdx);
    
    key = leftSide + rightSide;
    console.log(key);


}else if(command == 'Flip'){
    let [upperLower,startIdx,endIdx] = currentCommand;
    startIdx = Number(startIdx);
    endIdx = Number(endIdx);

    if(upperLower == 'Upper'){

        let leftSide = key.slice(0,startIdx);
        let rightSide = key.slice(endIdx);
        let center = key.slice(startIdx,endIdx).toUpperCase();

        key = leftSide + center + rightSide;
        console.log(key);


    }else if(upperLower == 'Lower'){

        let leftSide = key.slice(0,startIdx);
        let rightSide = key.slice(endIdx);
        let center = key.slice(startIdx,endIdx).toLowerCase();

        key = leftSide + center + rightSide;
        console.log(key);


    }

}else if(command == 'Contains'){

   if(key.includes(currentCommand)){
    console.log(`${key} contains ${currentCommand}`);

   }else {
    console.log(`Substring not found!`);
   }

}
    arr.shift();
}
console.log(`Your activation key is: ${key}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])

