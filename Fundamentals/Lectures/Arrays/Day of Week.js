function days(days){

    let daysOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    if(days >= 1 && days <= 7){
        switch(days){
            case 1: console.log(daysOfWeek[0]);break;
            case 2: console.log(daysOfWeek[1]);break;
            case 3: console.log(daysOfWeek[2]);break;
            case 4: console.log(daysOfWeek[3]);break;
            case 5: console.log(daysOfWeek[4]);break;
            case 6: console.log(daysOfWeek[5]);break;
            case 7: console.log(daysOfWeek[6]);break;
            default: console.log('Invalid day!'); break;
        }
    }else {
        console.log('Invalid day!')
    }
    
}

days(3);
days(6);
days(11);
days(1.1);
days('asd');