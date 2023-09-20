function login(user){

  let username = user[0];
  let password = '';
  let attemps = 0;
  let index = 2;
  let guess = user[1];

  for(let i = username.length - 1; i >= 0; i--){
    password += username[i];
  }

  while(guess !== password){

    attemps++;

    if(attemps === 4) {
      console.log(`User ${username} blocked!`);
      return;
    }
    
    console.log('Incorrect password. Try again.');

    guess = user[index];
    index++;
  }

  console.log(`User ${username} logged in.`);

}

//login(["Acer", "login", "go", "let me in", "recA"]);
//login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);

/*function login(username) {
  let password = "";
  let user = username[0];
  let wrongAttempts = 0;

  for (let i = user.length - 1; i >= 0; i--) {
    password += user[i];
  }

  let guess = username[1];
  let index = 2;

  while(guess != password){
    wrongAttempts++;
    if(wrongAttempts == 4){
        console.log(`User ${user} blocked!`);
        return;
    }
    console.log('Incorrect password. Try again.');
    guess = username[index];
    index++;
  }


  console.log(`User ${user} logged in.`)
}*/

