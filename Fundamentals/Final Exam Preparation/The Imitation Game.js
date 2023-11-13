function imitation(arr){

    let encryptedMessage = arr.shift();

    while(arr[0] !== 'Decode'){

        let currentCommand = arr[0].split('|');
        let command = currentCommand.shift();

        if(command == 'ChangeAll'){
            let [replaceThis,withThis] = currentCommand;

            if(encryptedMessage.includes(replaceThis)){

                while(encryptedMessage.includes(replaceThis)){
                    let newMessage = encryptedMessage.replace(replaceThis,withThis);
                    encryptedMessage = newMessage;
                }
            }

        }else if(command == 'Insert'){

            let [idx,idxValue] = currentCommand;
            idx = Number(idx);

            let modified = encryptedMessage.slice(0,idx) + idxValue + encryptedMessage.slice(idx);
    
           encryptedMessage = modified;
            

        }else if(command == 'Move'){

            let numberOfLetters = Number(currentCommand);
           
            let modified = encryptedMessage.substring(0, numberOfLetters);
            let newModified = encryptedMessage.slice(numberOfLetters) + modified;
            encryptedMessage = newModified;

        }

        arr.shift();
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);
    

}

imitation([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]
  
  )