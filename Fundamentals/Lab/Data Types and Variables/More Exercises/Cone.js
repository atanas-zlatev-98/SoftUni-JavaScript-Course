function cone(radius,height){
    
    let findVolume = (Math.PI * radius * radius * height) / 3;
    let areaS = Math.sqrt((height*height) + (radius*radius));
    let findArea = Math.PI * radius *(radius + areaS);

    console.log(`volume = ${findVolume.toFixed(4)}`);
    console.log(`area = ${findArea.toFixed(4)}`);
    

}

cone(3,5);
cone(3.3,7.8);


//volume = 47.1239 area = 83.2298