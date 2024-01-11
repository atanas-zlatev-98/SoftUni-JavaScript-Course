function gCommonDivisor(a,b){

    let GCD = a % b;

    while(GCD !== 0){
        a = b;
        b = GCD;
        GCD = a % b;
    }

    console.log(b);
}

gCommonDivisor(15,5);