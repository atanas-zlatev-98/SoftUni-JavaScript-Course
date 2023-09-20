function integerAndFloat(num1, num2, num3) {
    
  let sum = String(num1 + num2 + num3);

  if(sum.includes('.')){
    console.log(`${sum} - Float`)
  }else{
    console.log(`${sum} - Integer`)
  }
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);

/*
  for (let i = 0; i < sum.length; i++) {
    if (sum[i] == ".") {
      console.log("Float");
      break;
    } else {
      console.log("Integer");
    }
  }*/