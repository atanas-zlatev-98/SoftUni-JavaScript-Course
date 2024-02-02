function validate() {
    const submitBtn = document.getElementById('submit');
    const usernameInputRef = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    let usernamePatterns = /[a-zA-Z0-9]+/
    submitBtn.addEventListener('click', (e)=>{

        e.preventDefault();

        if(usernameInputRef.value.length >= 3 && usernameInputRef.value.length <= 20){
            usernameInputRef.style.borderColor = 'none';
        }else {
            usernameInputRef.style.borderColor = 'red';
        }
    })
}
