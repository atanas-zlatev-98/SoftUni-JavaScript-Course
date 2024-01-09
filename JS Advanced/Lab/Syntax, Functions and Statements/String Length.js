function strLength(strOne,strTwo,strThree){

    let sum = strOne.length + strTwo.length + strThree.length;
    let averageLenght = Math.round(sum / 3);

    console.log(sum + '\n' + averageLenght);
}

strLength('chocolate', 'ice cream', 'cake');
strLength('pasta', '5', '22.3');