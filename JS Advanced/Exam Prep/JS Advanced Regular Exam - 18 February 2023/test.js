import { expect } from "chai";
import { describe } from "mocha";
import {findNewApartment} from './findApartment.js';

describe('test suite', function(){

    describe('isGoodLocation', ()=>{

        it('should return This location is not suitable for you.', ()=>{
            expect(findNewApartment.isGoodLocation('Goce Delchev', true)).to.equal('This location is not suitable for you.')
        });
        it('should return This location is not suitable for you.', ()=>{
            expect(findNewApartment.isGoodLocation('Goce Delchev', false)).to.equal('This location is not suitable for you.');
        });

        it('should return You can go on home tour! for Sofia',()=>{
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!")
        });
        it('should return You can go on home tour! for Plovdiv',()=>{
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal("You can go on home tour!")
        });
        it('should return You can go on home tour! for Varna',()=>{
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal("You can go on home tour!")
        });

        it('should return There is no public transport in area. for Sofia with false boolean',()=>{
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal("There is no public transport in area.")
        });
        it('should return There is no public transport in area for Plovdiv with false boolean',()=>{
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal("There is no public transport in area.")
        });
        it('should return There is no public transport in area for Varna with false boolean',()=>{
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal("There is no public transport in area.")
        });

        it('should return Invalid input for number value', ()=>{
            expect(() => findNewApartment.isGoodLocation(123, true)).to.throw("Invalid input!");
        });

        it('should return Invalid input for array value', ()=>{
            expect(() => findNewApartment.isGoodLocation(['123'], true)).to.throw("Invalid input!");
        })

        it('should return Invalid input for string bloolan', ()=>{
            expect(() => findNewApartment.isGoodLocation('123', "true")).to.throw("Invalid input!");
        })
        it('should return Invalid input for number second value', ()=>{
            expect(() => findNewApartment.isGoodLocation('123', 123)).to.throw("Invalid input!");
        })

    })

    describe('isLargeEnough',()=>{

        it('should return 40,50,60 for correct input',()=>{
            expect(findNewApartment.isLargeEnough([40,50,60], 10)).to.equal("40, 50, 60");
        })

        it('should thorow invalid input for object input',()=>{
            expect(()=>findNewApartment.isLargeEnough({40:40}, 10)).to.throw("Invalid input!");
        })

        it('should thorow invalid input for string second param',()=>{
            expect(()=>findNewApartment.isLargeEnough([40,50,60], "10")).to.throw("Invalid input!");
        })

        it('should thorow invalid input for empty array',()=>{
            expect(()=>findNewApartment.isLargeEnough([], 10)).to.throw("Invalid input!");
        })

        it('should thorow invalid input for string minimalSquareMeters',()=>{
            expect(()=>findNewApartment.isLargeEnough([12,20], "10")).to.throw("Invalid input!");
        })
    });

    describe('isItAffordable',()=>{

        it(`should return You don't have enough money for this house! for not enought budget`,()=>{
            expect(findNewApartment.isItAffordable(1000,800)).to.equal(`You don't have enough money for this house!`);
        });

        it(`should return You don't have enough money for this house! for enought budget`,()=>{
            expect(findNewApartment.isItAffordable(1000,1800)).to.equal(`You can afford this home!`);
        });

        it(`should return Invalid input! for string price`,()=>{
            expect(()=>findNewApartment.isItAffordable("1000",1800)).to.throw(`Invalid input!`);
        });

        it(`should return Invalid input! for string budged`,()=>{
            expect(()=>findNewApartment.isItAffordable(1000,"1800")).to.throw(`Invalid input!`);
        });
    })

})