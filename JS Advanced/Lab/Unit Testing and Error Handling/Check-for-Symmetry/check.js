import { expect } from "chai";

function isSymmetric(arr) {

  if (!Array.isArray(arr)) {
    return false; // Non-arrays are non-symmetric
  }

  let reversed = arr.slice(0).reverse(); // Clone and reverse

  let equal = JSON.stringify(arr) == JSON.stringify(reversed);

  return equal;
}

describe('Test Group #1', function(){

    it('return array', ()=> { 
        const arr= [1,2,3,4,2,1];
        expect(isSymmetric(arr)).to.equal(false);
    });

    it('Return true if the input array is symmetric', ()=>{
      const arr = [-1,2,1];
      expect(isSymmetric(arr)).to.equal(false)
    })

    it('return true for [1,{a:1},"p",new Date(),"p",{a:1},1]', ()=>{
      const arr = [1,{a:1},'p',new Date(),'p',{a:1},1];
      expect(isSymmetric(arr)).to.equal(true)
    })

    it('return true for array with 1 element', ()=>{
      const arr = [1];
      expect(isSymmetric(arr)).to.equal(true)
    })

    it('Return false', ()=>{
      expect(isSymmetric(1,2,3,4,5,6)).to.equal(false);
    })
    
})