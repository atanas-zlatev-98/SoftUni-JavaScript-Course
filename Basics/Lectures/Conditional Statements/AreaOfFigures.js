function figures(input){
    let figure = input[0];

    if(figure === 'square'){
        let square = Number(input[1]);
        let squareArea = square * square;
        
        console.log(squareArea.toFixed(3));

    }else if(figure === 'rectangle'){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let rectangleArea = a * b;

        console.log(rectangleArea.toFixed(3));

    }else if(figure === 'circle'){
        let circle = Number(input[1]);
        let circleArea = Math.PI * Math.pow(circle,2);

        console.log(circleArea.toFixed(3));

    }else if(figure === 'triangle') {
        let a = Number(input[1]);
        let h = Number(input[2]);
        let triangleArea = (a * h) / 2;

        console.log(triangleArea.toFixed(3));

    }
}