function repeat(str,repeats){

    let bufffer = '';

    for(let i =0;i< repeats;i++){
        bufffer += str;
    }

    console.log(bufffer);
}
repeat("abc", 3);
repeat("String", 2)