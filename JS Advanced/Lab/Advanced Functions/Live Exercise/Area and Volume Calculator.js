function solve(areaFn, volFn, input) {

    const data = JSON.parse(input);
    const result = [];

    for(let fig of data){
        result.push({
            area: areaFn.call(fig),
            volume: volFn.call(fig)
        })
    }
   return result
}
  

console.log(solve(area,vol,`[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]`));

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}
