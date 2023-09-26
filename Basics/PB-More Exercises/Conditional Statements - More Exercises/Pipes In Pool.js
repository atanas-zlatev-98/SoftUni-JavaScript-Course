function pipes(input){

    let volume = Number(input[0]);
    let pipe1 = Number(input[1]);
    let pipe2 = Number(input[2]);
    let hours = Number(input[3]);

    let totalVoume = (pipe1 + pipe2) * hours;
    let pollIsFull = (totalVoume / volume) * 100;

    let pipeOne = pipe1 * hours;
    let pipeOneVolume = (pipeOne / totalVoume) * 100;

    let pipeTwo = pipe2 * hours;
    let pipeTwoVolume = (pipeTwo / totalVoume) * 100;

    if(totalVoume > volume){
        console.log(`For ${hours} hours the pool overflows with ${(totalVoume-volume).toFixed(2)} liters.`);
    }else {
        console.log(`The pool is ${pollIsFull.toFixed(2)}% full. Pipe 1: ${pipeOneVolume.toFixed(2)}%. Pipe 2: ${pipeTwoVolume.toFixed(2)}%.`)
    }

}

pipes([1000,100,120,3]);
//pipes(100,100,100,2.5);
