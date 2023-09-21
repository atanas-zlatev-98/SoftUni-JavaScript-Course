function password(input){
    let username = input[0];
    let password = input[1];

    let inputPassword = input[2];

    let index = 3;

    while(inputPassword !== password){
        inputPassword = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);
}

password(["Nakov",

"1234",

"Pass",

"1324",

"1234"]);

password(["Gosho", "secret", "secret"]);