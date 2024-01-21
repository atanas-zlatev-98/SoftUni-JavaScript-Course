function jansNotation(arr){

    let numbers = [];

    const operatos = {
        '+': (a,b) => a + b,
        '-': (a,b)=> a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b,
    }

    for(let input of arr){

        if(typeof input === 'number'){
            numbers.push(Number(input));
        }else {
            let num1 = numbers.pop();
            let num2 = numbers.pop();

            if(num1 && num2){
                numbers.push(operatos[input](num2,num1));
            }else {
                console.log('Error: not enough operands!')
                return
            }
           
        }
    }

    if(numbers.length > 1){
        console.log(`Error: too many operands!`)
    }else {
        console.log(numbers.join(''));
    }

}

jansNotation([3,4,'+'])
jansNotation([5,3,4,'*','-'])
jansNotation([15, '/']);
jansNotation([7,33,8,'-']);