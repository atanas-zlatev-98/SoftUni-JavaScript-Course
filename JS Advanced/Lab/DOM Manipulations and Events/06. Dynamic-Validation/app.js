function validate() {
  let inputRef = document.getElementById("email");
  const pattent = /([a-z]+)\@([a-z]+)\.([a-z]+)/g;
   
    inputRef.addEventListener('change', (e)=>{
        let innerValue = e.target.value;

        let match = pattent.test(innerValue);
        if(!match){
            inputRef.classList.add('error');
            return
        }else {
            inputRef.classList.remove('error');
            return
        }
    })

}
