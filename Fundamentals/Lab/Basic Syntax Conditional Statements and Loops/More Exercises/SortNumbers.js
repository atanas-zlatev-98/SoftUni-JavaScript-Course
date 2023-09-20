function sortNumbers(numberOne, numberTwo, numberThree) {

  if (numberOne > numberTwo && numberOne > numberThree) {
    console.log(numberOne);
    if (numberTwo > numberThree) {
      console.log(numberTwo);
      console.log(numberThree);
    } else {
      console.log(numberThree);
      console.log(numberTwo);
    }
  }

  if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log(numberTwo);

    if(numberOne > numberThree){
      console.log(numberOne);
      console.log(numberThree)
    }else{
      console.log(numberThree);
      console.log(numberOne);
    }
  }

  if(numberThree > numberOne && numberThree > numberTwo){
    console.log(numberThree);

    if(numberOne > numberTwo){
      console.log(numberOne);
      console.log(numberTwo);
    }else {
      console.log(numberTwo);
      console.log(numberOne);
    }
  }
}

//sortNumbers([2,1,3])
//sortNumbers(-2, 1, 3);
//sortNumbers(2,1,3);
sortNumbers(0,0,2)
