function echoType(param){

 let dataType = typeof param;

 console.log(dataType);
 if(dataType == 'string' || dataType == 'number'){
    console.log(param);
 }else {
    console.log('Parameter is not suitable for printing');
 }

}

echoType('Hello, JavaScript!');
echoType(18);
echoType({});
echoType(null);
