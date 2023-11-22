function passwordReset(arr) {

  let password = arr.shift();

  while (arr[0] !== "Done") {

    let currentCommand = arr[0];

    if (currentCommand.includes("TakeOdd")) {
      let newPassword = password.split("");

      let buffer = "";

      for (let i = 0; i < newPassword.length; i++) {

        if (i % 2 !== 0) {
          buffer += newPassword[i];
        }
        
      }
      password = buffer;
      console.log(password);

    } else if (currentCommand.includes("Cut")) {

      let tokens = currentCommand.split(" ");
      tokens.shift();

      let [startIndex,toDelete] = tokens.map(Number);

            let newPassword = password.split('');

            newPassword.splice(startIndex,toDelete);

            let modified = newPassword.join('');

            password = modified;
      console.log(password);

    } else if (currentCommand.includes("Substitute")) {
      let tokens = currentCommand.split(" ");

      tokens.shift();

      let [replaceThis, withThis] = tokens;

      if (password.includes(replaceThis)) {

        while (password.includes(replaceThis)) {
          let modified = password.replace(replaceThis, withThis);
          password = modified;
        }

      } else {

        console.log(`Nothing to replace!`);
        break;

      }
      console.log(password);
    }
    arr.shift();
  }

  console.log(`Your password is: ${password}`);
}

passwordReset([
  "AtestBtest",
  
  "Cut 6 4",
 
  "Done",
]);
