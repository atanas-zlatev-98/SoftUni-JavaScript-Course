import { expect } from "chai";

function createCalculator() {
  let value = 0;

  return {
    add: function (num) {
      value += Number(num);
    },

    subtract: function (num) {
      value -= Number(num);
    },

    get: function () {
      return value;
    },
  };
}

describe('Test Group 1', function(){
   
    it('should return Obj', ()=>{
        let obj = {

        };
        expect(typeof createCalculator()).to.equal(typeof obj);
    })
})