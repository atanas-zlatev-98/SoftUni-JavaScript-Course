function rotateArray(arr){
   
    let lastElement = Number(arr.pop());
    
    for(let i = 0; i < lastElement;i++){

        let currentElement = arr.pop();
        arr.unshift(currentElement);
        
    }

    console.log(arr.join(' '));


}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut','Apple', '15']);