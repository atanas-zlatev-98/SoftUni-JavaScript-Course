function extractEmails(str){

    let pattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-][A-Za-z]+)+))(\b|(?=\s))/g;
    
    let array = [...str.matchAll(pattern)];

    for(let i = 0; i< array.length;i++){
        let currentEmail = array[i];
        console.log(currentEmail[0]);
    }

}
extractEmails(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk

for more information`)