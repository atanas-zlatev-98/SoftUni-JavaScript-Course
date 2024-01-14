function sortByTwoCriteria(arr){

    let result = arr.sort((a,b) => a.length - b.length || a.localeCompare(b));

    for(let el of result){
        console.log(el);
    }
}

//sortByTwoCriteria(['alpha','beta','gamma']);
sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
//sortByTwoCriteria(['test', 'Deny', 'omen', 'Default']);