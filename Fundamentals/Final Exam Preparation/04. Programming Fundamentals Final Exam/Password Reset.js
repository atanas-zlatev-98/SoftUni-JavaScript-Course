function passwordReset(arr){

    let password = arr.shift();

    while(arr[0] !== 'Done'){

        let command = arr[0].split(' ');
       
        if(command.includes('TakeOdd')){

            let newPassword = '';
            for(let i = 0;i<password.length;i++){
                if(i % 2 !== 0){
                    newPassword += password[i];
                }
            }
            password = newPassword;
            console.log(password);

        }else if(command.includes('Cut')){

            let tokens = arr[0].split(' ');
            tokens.shift();

            let [idx,length] = tokens.map(Number);
            let split = password.split('');
            let newPassword = split.splice(idx,length);
            let join = newPassword.join('');

            let final = password.replace(join,'');
          
            password = final;
            console.log(password);

        }else if(command.includes('Substitute')){

            let tokens = arr[0].split(' ');
            tokens.shift();
            let [replaceThis, withThis] = tokens;

            if(password.includes(replaceThis)){

                while(password.includes(replaceThis)){
                    let newPassword = password.replace(replaceThis,withThis);
                    password = newPassword
                }
                console.log(password);

            }else {
                console.log(`Nothing to replace!`);
            }

        }

       
        arr.shift();
    }

    console.log(`Your password is: ${password}`);


}

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
