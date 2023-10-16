function theLift(arr){

    let people = Number(arr.shift());
    let wagons = arr.pop().split(' ').map(Number);
   
    for(let i = 0; i < wagons.length;i++){

        let currentIndex = Number(wagons[i]);

        if(currentIndex < 4){
            let fitPeople = 4 - currentIndex;

            if(people < fitPeople){
                console.log(`The lift has empty spots!`);
                wagons[i] += people;
                people -= fitPeople;
                break;
            }else {
                wagons[i] += fitPeople;
                people -= fitPeople;
            }
          
        }

    }

    if(people > 0){
        console.log(`There isn't enough space! ${people} people in a queue!`)
        console.log(wagons.join(' '));
    }else {
        console.log(wagons.join(' '));
    }

}

theLift(["15","0 0 0 0 0"]);
//theLift(["20","0 2 0"]);