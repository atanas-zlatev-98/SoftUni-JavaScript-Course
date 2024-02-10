import {expect, should} from 'chai';
import {motorcycleRider} from './MotorcycleRider.js'

describe('Test Suite', function(){

    describe('licenseRestriction (category)', function(){
        it('test 1', ()=>{
            expect(motorcycleRider.licenseRestriction("AM")).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        })
    
        it(`test 2`, ()=>{
            expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        })
    
        it('test 3', ()=>{
            expect(motorcycleRider.licenseRestriction('A2')).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        })
        it('test 4', ()=>{
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        })
    
        it('test 5', ()=>{
            expect(()=> motorcycleRider.licenseRestriction('C')).to.throw('Invalid Information!');
        })
    
        it('test 6', ()=>{
            expect(()=> motorcycleRider.licenseRestriction(123)).to.throw('Invalid Information!');
        })
    })

    describe('motorcycleShowroom (engineVolume, maximumEngineVolume)', function(){
        it('test 1', ()=>{
            expect(motorcycleRider.motorcycleShowroom(['50'],50)).to.equal("There are 1 available motorcycles matching your criteria!");
        })

        it('test 2', ()=>{
            expect(motorcycleRider.motorcycleShowroom(['50','51'],100)).to.equal("There are 2 available motorcycles matching your criteria!");
        })

        it('test 3', ()=>{
            expect(motorcycleRider.motorcycleShowroom(['50','51'],50)).to.equal("There are 1 available motorcycles matching your criteria!");
        })

        it('test 4', ()=>{
            expect(()=>motorcycleRider.motorcycleShowroom('50',50)).to.throw();
        })
        it('test 5', ()=>{
            expect(()=>motorcycleRider.motorcycleShowroom(['50'],'50')).to.throw();
        })
    })

    describe('otherSpendings (equipment, consumables, discount)',function(){
        it('test 1', ()=>{
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'],false)).to.equal("You spend $600.00 for equipment and consumables!");
        });
        it('test 2', ()=>{
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'],true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!");
        });

        it('test 3', ()=>{
            expect(()=>motorcycleRider.otherSpendings('helmet',['engine oil','oil filter'],true)).to.throw();
    });
    it('test 4', ()=>{
        expect(()=>motorcycleRider.otherSpendings(['helmet','jacked'],'engine oil' ,false)).to.throw();
});
it('test 5', ()=>{
    expect(()=>motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'] ,0)).to.throw();
});


})
});