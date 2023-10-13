function sortByCriteria(arr){

    let sortedArr = arr.sort((a,b)=> a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join('\n'));

}

sortByCriteria(['alpha','beta','gamma']);