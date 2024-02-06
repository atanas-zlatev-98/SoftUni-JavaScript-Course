function validate() {

  const submitBtn = document.querySelector("#submit");
  const userNameRef = document.querySelector("#username");
  const emailRef = document.querySelector("#email");
  const passwordRef = document.querySelector("#password");
  const confirmPasswordRef = document.querySelector("#confirm-password");

  const checkBoxRef = document.querySelector("#company");
  const companyInfoRef = document.querySelector("#companyInfo");
  const companyNumberRef = document.querySelector('#companyNumber');

  const validRef = document.getElementById("valid");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    gatherInfo();
  });

  checkBoxRef.addEventListener("change", (e) => {
    if (e.target.checked) {
      companyInfoRef.style.display = "block";
    } else {
      companyInfoRef.style.display = "none";
    }
  });

  function gatherInfo() {

    const userNameValue = userNameRef.value;
    const emailValue = emailRef.value;
    const passwordValue = passwordRef.value;
    const confirmPasswordValue = confirmPasswordRef.value;
    const checkBoxValue = checkBoxRef.checked;
    const companyNumberValue = companyNumberRef.value;

    let isUserValid = checkUsername(userNameValue);
    let isEmailValid = checkEmail(emailValue);
    let isPasswordValid = checkPassword(passwordValue, confirmPasswordValue);
    let isCompanyValid = checkCompanyNumber(companyNumberValue);

    if (userNameValue) {
      checkUsername(userNameValue);
    }

    if (emailValue) {
      checkEmail(emailValue);
    }

    if (passwordValue) {
      checkPassword(passwordValue, confirmPasswordValue);
    }

    if(companyNumberValue && checkBoxValue){
        checkCompanyNumber(companyNumberValue);
    }

    if (!checkBoxValue) {
        checkValidNoCompany(isUserValid,isEmailValid,isPasswordValid);
      } else {
        checkValidCompany(isUserValid,isEmailValid,isPasswordValid,isCompanyValid);
      }
  }

  function checkUsername(username) {

    let usernamePatterns = /^[A-Za-z0-9]{3,20}$/;

    if (username.match(usernamePatterns)) {
      userNameRef.style.border = "none";
      return true;
    } else {
      userNameRef.style.borderColor = "red";
      return false;
    }
  }

  function checkEmail(email) {
    
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;

    if (email.match(emailPattern)) {
      emailRef.style.border = "none";
      return true;
    } else {
      emailRef.style.borderColor = "red";
      return false;
    }
  }

  function checkPassword(password, confirmPassword) {
    let passwordPattern = /^[A-Za-z0-9_]{5,15}$/;

    if (password.match(passwordPattern) && password === confirmPassword) {
      passwordRef.style.border = "none";
      confirmPasswordRef.style.border = "none";
      return true;
    } else {
      passwordRef.style.borderColor = "red";
      confirmPasswordRef.style.borderColor = "red";
      return false;
    }
  }

  function checkValidNoCompany(user,email,password) {
    if (user && email && password) {
      validRef.style.display = "block";
    }else {
        validRef.style.display = "none";
    }
  }

  function checkValidCompany(user,email,password,company) {
    
    if (user && email && password && company) {
      validRef.style.display = "block";
    }else {
        validRef.style.display = "none";
    }
  }

  function checkCompanyNumber(companyNum){
        if(companyNum >= 1000 && companyNum <= 9999){
            companyNumberRef.style.border = "none";
            return true
        }else {
            companyNumberRef.style.borderColor = "red";
            return false
        }
  }

}