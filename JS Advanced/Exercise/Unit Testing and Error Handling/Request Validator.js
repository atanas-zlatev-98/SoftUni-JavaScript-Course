function requestValidator(obj) {
let validateMethod = ['GET','POST','DELETE','CONNECT'];
let validateURI = /^[\w.]+$/g;
let validateVersion = ["HTTP/0.9","HTTP/1.0", "HTTP/1.1","HTTP/2.0"];
let validateMessage = ["<", ">", "\\", "&", `'`, `"`];

if(!validateMethod.includes(obj.method)){
  throw new Error('Invalid request header: Invalid Method');
}

if(!obj.uri === '*' || !obj.uri || !obj.uri.match(validateURI)){
  throw new Error('Invalid request header: Invalid URI');
}
if(!validateVersion.includes(obj.version)){
  throw new Error('Invalid request header: Invalid Version');
}

if(!obj.hasOwnProperty('message')){
  throw new Error('Invalid request header: Invalid Message');
}

for(let char of obj.message){
  if(validateMessage.includes(char)){
    throw new Error('Invalid request header: Invalid Message');
  }
}

return obj;
}

console.log(requestValidator({
  method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));

console.log("--------------");

