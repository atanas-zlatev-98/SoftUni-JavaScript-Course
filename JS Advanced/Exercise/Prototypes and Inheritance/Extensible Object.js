function extensibleObject() {
  let parent = {};
  let childObj = Object.create(parent);

  childObj.extend = function(obj){
    let objAsArray = Object.entries(obj);
    for(let [key,val] of objAsArray){
        if(typeof(val) === 'function'){
            parent[key] = val;
        }else {
            childObj[key] = val;
        }
    }
    return childObj;
  }
  return childObj;
}

const myObj = extensibleObject();

const template = {
  extensionMethod: function () {},
  extensionProperty: "someString",
};

console.log(myObj.extend(template));
