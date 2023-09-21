function oneToNumByThree(input){
    let n = Number(input[0]);

    for(let i = 1; i <= n; i += 3){
        console.log(i)
    }
}

oneToNumByThree(['10']);
oneToNumByThree(['7']);
oneToNumByThree(['15']);