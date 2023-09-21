function numbersSum(input){

    let index = 1;
    let nums = Number(input[0]);
    let sums = 0;

    while(sums < nums){
        let currentNums = Number(input[index]);
        sums += currentNums;       
        index++;
    }
    console.log(sums);
   

}

numbersSum(["100", "10", "20", "30", "40"]);
numbersSum(["20", "1", "2", "3", "4", "5", "6"]);