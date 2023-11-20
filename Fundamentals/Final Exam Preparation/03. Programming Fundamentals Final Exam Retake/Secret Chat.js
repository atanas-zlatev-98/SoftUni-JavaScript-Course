function secretChat(arr){

    let secretMessage = arr.shift();

    while(arr[0] !== 'Reveal'){

        let tokens = arr[0].split(':|:');

        let command = tokens.shift();

        if(command == 'ChangeAll'){

           let [replaceThis,withThis] = tokens;
            
           while(secretMessage.includes(replaceThis)){
                let newMessage = secretMessage.replace(replaceThis,withThis);
                secretMessage = newMessage;
           }
           console.log(secretMessage);

        }else if(command == 'Reverse'){

            let text = tokens.join('');
            if(secretMessage.includes(text)){
               let reversedWord = '';
               let removeWord = secretMessage.replace(text,'');
               for(let i = text.length - 1;i >= 0;i--){
                let currentChar = text[i];
                reversedWord += currentChar;
               }

               secretMessage = removeWord + reversedWord;
               console.log(secretMessage);

            }else {
                console.log('error');
            }

        }else if(command == 'InsertSpace'){

            let idx = Number(tokens);
           
            let newMessage = secretMessage.slice(0,idx) + ' ' + secretMessage.slice(idx);
        
            secretMessage = newMessage;
           
            console.log(secretMessage);
        }
        

        arr.shift();
    }

    console.log(`You have a new text message: ${secretMessage}`);
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
  )