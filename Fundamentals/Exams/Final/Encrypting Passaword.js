function encryptingPassword(arr){

    let numberOfInputs = Number(arr.shift());

    let pattern = /(?<start>[^\s]+)>(?<gO>\d{3})\|(?<gT>[a-z]{3})\|(?<gTh>[A-Z]{3})\|(?<gF>[^><]{3})<\1/;

    for(let i = 0 ; i < numberOfInputs;i++){
        let currentInput = arr[i];
        
        let match = pattern.exec(currentInput);

        if(match){
            let {start,gO,gT,gTh,gF} = match.groups;
            let finalPassword = gO + gT + gTh + gF;
            console.log(`Password: ${finalPassword}`)
        }else {
            console.log(`Try another password!`);
        }
    }

}

encryptingPassword(["3","##>00|no|NO|!!!?<###","##>123|yes|YES|!!!<###","$$<111|noo|NOPE|<<>$$"]);
/*encryptingPassword(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])*/