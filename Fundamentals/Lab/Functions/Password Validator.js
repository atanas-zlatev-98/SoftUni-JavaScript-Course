function validator(pass) {

    let isValidLength = checkPasswordLength(pass);
    let isOnlyLetters = checkOnlyLettersDigits(pass);
    let isMin2Digits = checkMinLength(pass);

    if(isValidLength && isOnlyLetters && isMin2Digits){
        console.log(`Password is valid`);
    }
    
  function checkPasswordLength(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    } else {
      console.log("Password must be between 6 and 10 characters");
      return false;
    }
  }

  function checkOnlyLettersDigits(pass) {
    for (let currentChar of pass) {
      let code = currentChar.charCodeAt();

      if (
        !(
          (code >= 48 && code <= 57) ||
          (code >= 65 && code <= 90) ||
          (code >= 97 && code <= 122)
        )
      ) {
        console.log("Password must consist only of letters and digits");
        return false;
      }
    }
    return true;
  }

  function checkMinLength(pass) {

    let digits = 0;

    for (let char of pass) {
      let code = char.charCodeAt();
      if (code >= 48 && code <= 57) {
        digits++;
      }
    }

    if(digits < 2){
        console.log("Password must have at least 2 digits");
        return false;
    }else {
        return true;
    }
  }
}

validator("logIn");
validator('MyPass123')