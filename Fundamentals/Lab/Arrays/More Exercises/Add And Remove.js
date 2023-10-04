function addAndRemove(arr){

    let addArr = [];
    let number;

    for(let i = 0;i < arr.length;i++){
        number = i;
        let command = String(arr[i]);
        if(command == 'add'){
            number += 1;
            addArr.push(number);
        }else if(command == 'remove') {
            addArr.pop();
        }
    }

    if(addArr.length !== 0){
        console.log(addArr.join(' '));
    }else {
        console.log('Empty');
    }
}

addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);