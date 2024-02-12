import { expect } from "chai";
import {petAdoptionAgency} from './petAdoptionAgency.js';

describe('Test Suite', function(){

    describe('isPetAvailable', ()=>{
        it('availableCount = 0', ()=>{
            expect(petAdoptionAgency.isPetAvailable('dog', 0, true)).to.equal(`Sorry, there are no dog(s) available for adoption at the agency.`)
        });
        it('availableCount = -1', ()=>{
            expect(petAdoptionAgency.isPetAvailable('dog', -1, true)).to.equal(`Sorry, there are no dog(s) available for adoption at the agency.`)
        });

        it('availableCount = 2, true', ()=>{
            expect(petAdoptionAgency.isPetAvailable('dog', 2, true)).to.equal(`Great! We have 2 vaccinated dog(s) available for adoption at the agency.`)
        });
        it('availableCount = 2, false', ()=>{
            expect(petAdoptionAgency.isPetAvailable('dog', 2, false)).to.equal(`Great! We have 2 dog(s) available for adoption, but they need vaccination.`)
        });

        it('pet not a string', ()=>{
            expect(() => petAdoptionAgency.isPetAvailable(12, 2, false)).to.throw("Invalid input")
        });

        it('string second param', ()=>{
            expect(() => petAdoptionAgency.isPetAvailable('Dog', "2", false)).to.throw("Invalid input")
        });
        it('string third param', ()=>{
            expect(() => petAdoptionAgency.isPetAvailable('Dog', 2, "false")).to.throw("Invalid input")
        });

    });

    describe(`getRecommendedPets`, ()=>{

        it('test 1', ()=>{
            expect(petAdoptionAgency.getRecommendedPets([{name:'richi',traits:'what trait'}], 'what trait')).to.equal(`Recommended pets with the desired traits (what trait): richi`);
        })
        it('test 2', ()=>{
            expect(petAdoptionAgency.getRecommendedPets([{name:'richi',traits:'what trait'}], 'trait')).to.equal(`Sorry, we currently have no recommended pets with the desired traits: trait.`);
        })
        it('test 3', ()=>{
            expect(()=>petAdoptionAgency.getRecommendedPets(`{name:'richi',traits:'what trait'}`, 'trait')).to.throw("Invalid input");
        })
        it('test 4', ()=>{
            expect(()=>petAdoptionAgency.getRecommendedPets([{name:'richi',traits:'what trait'}], 12)).to.throw("Invalid input");
        })
    })

    describe(`adoptPet`,()=>{
        it('test 1',()=>{
            expect(petAdoptionAgency.adoptPet('dog','Richi')).to.equal(`Congratulations, Richi! You have adopted dog from the agency. Enjoy your time with your new furry friend!`)
        })
        it('test 2',()=>{
            expect(()=>petAdoptionAgency.adoptPet(12,'Richi')).to.throw(`Invalid input`);
        })
        it('test 3',()=>{
            expect(()=>petAdoptionAgency.adoptPet("12",12)).to.throw(`Invalid input`);
        })
    })
})