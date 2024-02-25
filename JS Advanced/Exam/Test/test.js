import { expect } from "chai";
import {planYourTrip} from './planYourTrip.js';

describe('Test Suite',()=>{

    describe('choosingDestination (destination, season, year)',()=>{
        it('throw invalid year for 2024 year',()=>{
            expect(()=>planYourTrip.choosingDestination('Ski Resort','Winter',2023)).to.throw('Invalid Year!');
        })
        it('throw destination is not what you are looking for for surfing destination',()=>{
            expect(()=>planYourTrip.choosingDestination('Surfing','Summer',2024)).to.throw('This destination is not what you are looking for.');
        })
        it('return consider visiting during winter',()=>{
            expect(planYourTrip.choosingDestination('Ski Resort','Summer',2024)).to.equal('Consider visiting during the Winter for the best experience at the Ski Resort.');
        })
        it('return  great choice for corrent input',()=>{
            expect(planYourTrip.choosingDestination('Ski Resort','Winter',2024)).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.');
        })
    })
    
    describe('exploreOptions (activities, activityIndex)',()=>{

        it('throw Invalid Information! for string activities',()=>{
            expect(()=>planYourTrip.exploreOptions('test',["Skiing","Snowboarding","Winter Hiking"])).to.throw('Invalid Information!')
        })
        it('throw Invalid Information! for string activity index',()=>{
            expect(()=>planYourTrip.exploreOptions(["Skiing","Snowboarding","Winter Hiking"],"12")).to.throw('Invalid Information!')
        })
        it('throw Invalid Information! for non-integer activity index',()=>{
            expect(()=>planYourTrip.exploreOptions(["Skiing","Snowboarding","Winter Hiking"],12.50)).to.throw('Invalid Information!')
        })
        it('throw Invalid Information! for negative activity index',()=>{
            expect(()=>planYourTrip.exploreOptions(["Skiing","Snowboarding","Winter Hiking"],-12)).to.throw('Invalid Information!')
        })
        it('throw Invalid Information! for outside limit activity index',()=>{
            expect(()=>planYourTrip.exploreOptions(["Skiing","Snowboarding","Winter Hiking"],12)).to.throw('Invalid Information!')
        })
        it('return Skiing, Snowboarding for correct inputs',()=>{
            expect(planYourTrip.exploreOptions(["Skiing","Snowboarding","Winter Hiking"],2)).to.equal('Skiing, Snowboarding');
        })
    })

    describe('estimateExpenses (distanceInKilometers, fuelCostPerLiter)',()=>{
        it('throw Invalid information for string distanceKilometers',()=>{
            expect(()=>planYourTrip.estimateExpenses('12',12)).to.throw('Invalid Information!');
        })
        it('throw Invalid information for string fuelCostPerLiter',()=>{
            expect(()=>planYourTrip.estimateExpenses(12,"12")).to.throw('Invalid Information!');
        })
        it('throw Invalid information for null distanceKilometers',()=>{
            expect(()=>planYourTrip.estimateExpenses(null,12)).to.throw('Invalid Information!');
        })
        it('throw Invalid information for null fuelCostPerLiter',()=>{
            expect(()=>planYourTrip.estimateExpenses(12,null)).to.throw('Invalid Information!');
        })
        it('throw Invalid information for undefined distanceKilometers',()=>{
            expect(()=>planYourTrip.estimateExpenses(undefined,12)).to.throw('Invalid Information!');
        })
        it('throw Invalid information for undefined fuelCostPerLiter',()=>{
            expect(()=>planYourTrip.estimateExpenses(12,undefined)).to.throw('Invalid Information!');
        })
        it('throw Invalid information for undefined inputs',()=>{
            expect(()=>planYourTrip.estimateExpenses(undefined,undefined)).to.throw('Invalid Information!');
        })
        it('throw Invalid information for undefined fuelCostPerLiter',()=>{
            expect(()=>planYourTrip.estimateExpenses(12,undefined)).to.throw('Invalid Information!');
        })
        it('throw Invalid information for array distanceKilometers',()=>{
            expect(()=>planYourTrip.estimateExpenses([],12)).to.throw('Invalid Information!');
        })
        it('throw Invalid information for array fuelCostPerLiter',()=>{
            expect(()=>planYourTrip.estimateExpenses(12,[])).to.throw('Invalid Information!');
        })
        it('throw Invalid information for null both params',()=>{
            expect(()=>planYourTrip.estimateExpenses(null,null)).to.throw('Invalid Information!');
        })
        it('throw Invalid information for 0 fuelCostPerLiter',()=>{
            expect(()=>planYourTrip.estimateExpenses(12,0)).to.throw('Invalid Information!');
        })
        it('throw Invalid information for 0 distanceKilometers',()=>{
            expect(()=>planYourTrip.estimateExpenses(0,10)).to.throw('Invalid Information!');
        })
        it('throw Invalid information for string params',()=>{
            expect(()=>planYourTrip.estimateExpenses("10","10")).to.throw('Invalid Information!');
        })
        it('throw Invalid information for -1 fuelCostPerLiter',()=>{
            expect(()=>planYourTrip.estimateExpenses(12,-1)).to.throw('Invalid Information!');
        })
        it('throw Invalid information for -1 distanceKilometers',()=>{
            expect(()=>planYourTrip.estimateExpenses(-1,10)).to.throw('Invalid Information!');
        })
        it('retunr The trip is budget-friendly, estimated cost is $100.00.',()=>{
            expect(planYourTrip.estimateExpenses(10,10)).to.equal('The trip is budget-friendly, estimated cost is $100.00.');
        })
        it('retunr The estimated cost for the trip is $1000.00, plan accordingly.',()=>{
            expect(planYourTrip.estimateExpenses(100,10)).to.equal('The estimated cost for the trip is $1000.00, plan accordingly.');
        })
        it('retunr The trip is budget-friendly, estimated cost is $500.00.',()=>{
            expect(planYourTrip.estimateExpenses(50,10)).to.equal('The trip is budget-friendly, estimated cost is $500.00.');
        })
        
    })

})