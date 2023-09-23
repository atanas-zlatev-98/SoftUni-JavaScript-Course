function biggest(num1,num2,num3){
    
    if(num1 >= num2 && num1 >= num3){
        console.log(num1)
    }else if(num2 >= num1 && num2 >= num3){
        console.log(num2);
    }else if(num3 >= num1 && num3 >= num2){
        console.log(num3);
    }

}

biggest(-2,7,3);
biggest(130,5,99);
biggest(43,43.2,43.1);
biggest(2,2,2);