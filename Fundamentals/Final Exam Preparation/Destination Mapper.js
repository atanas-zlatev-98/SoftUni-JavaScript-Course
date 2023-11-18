function destinationMapper(str){

    let pattern = /(=|\/)(?<locationz>[A-Z][A-Za-z]{2,})\1/;

    let result = pattern.exec(str);
    

   for(let loc of result){
    let locs = result.groups;
    console.log(locs);
   }

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")