function loadingBar(percent) {
  let result = calc(percent);

  function calc(number) {
    let placeholder = "";
    let devide = number / 10;
    
    for (let i = 1; i <= 10; i++) {
      let currentIndex = i;

      if (currentIndex <= devide) {
        placeholder += "%";
      } else {
        placeholder += ".";
      }
    }
    
   return placeholder;
  }

  if(percent < 100){
    console.log(`${percent}% [${result}]`);
    console.log('Still loading...')
  }else {
    console.log(`${percent}% Complete!`);
  }
  
}

loadingBar(50);
loadingBar(50);
