function income(input){
let index = 1;
let income = Number(input[0]);

let balance = 0;

while(income !== 'NoMoreMoney'){
  let amount = Number(income);
  if(amount < 0){
    console.log('Invalid operation!');
    break;
  }
  balance += amount;
  console.log(`Increase: ${amount.toFixed(2)}`);
  income = input[index];
  index++;
}
console.log(`Total: ${balance.toFixed(2)}`);
}

income(["120", "45.55", "-150"]);