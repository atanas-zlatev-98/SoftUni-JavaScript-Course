function decryptingCommands(arr){

    let message = arr.shift();

    while(arr[0] !== 'Finish'){

        let tokens = arr[0].split(' ');

        let command = tokens.shift();

        if(command == 'Replace'){

            let [replaceThis,withThis] = tokens;

            while(message.includes(replaceThis)){
                let newMessage = message.replace(replaceThis,withThis);
                message = newMessage;
            }
            console.log(message);

        }else if(command == 'Cut'){

            let [startIdx,endIdx] = tokens.map(Number);

            if(typeof message[startIdx] !== 'undefined' && typeof message[endIdx] !== 'undefined'){

                let leftSide = message.slice(0,startIdx);
                let rightSide = message.slice(endIdx + 1);

                message = leftSide + rightSide;

                console.log(message);
            }else {
                console.log(`Invalid indices!`)
            }


        }else if(command == 'Make'){

            let upperLower = tokens;

            if(upperLower == 'Upper'){
                message = message.toUpperCase();
            }else if(upperLower == 'Lower'){
                message = message.toLowerCase();
            }

            console.log(message);

        } else if(command == 'Check'){

            let checkStr = tokens;

            if(message.includes(checkStr)){
                console.log(`Message contains ${checkStr}`)
            }else {
                console.log(`Message doesn't contain ${checkStr}`)
            }

        }else if(command == 'Sum'){

            let [startIdx,endIdx] = tokens.map(Number);

            if(startIdx >= 0 && endIdx <= message.length){

                let newMsg = message.substring(startIdx,endIdx + 1);
                let codeNumber = 0;

                for(let char of newMsg){

                    let code = char.charCodeAt();
                    codeNumber += code

                }

                console.log(codeNumber);

            }else {
                console.log(`Invalid indices!`)
            }
        }

        arr.shift();
    }

}

decryptingCommands(["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 1 4", "Finish"])
//decryptingCommands(["HappyNameDay","Replace p r","Make Lower","Cut 2 23","Sum -2 2","Finish"])