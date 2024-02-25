import { expect } from "chai";
import { planYourTrip } from "./planYourTrip.js";

describe('test suite',function(){

    describe('choosingDestination (destination, season, year)',()=>{

        expect('throw invalid year for 2024',()=>{
            it(()=>planYourTrip.choosingDestination('Ski Resort',2023,'Winter')).to.throw(`Invalid Year!`);
        })

    })
})