import { expect } from "chai";
import { movieTheater } from "./03. Movie Theater _Resources.js";

describe('test suite', function(){
    describe('ageRestrictions', ()=>{
        it('test 1',()=>{
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
        })
        it('test 2', ()=>{
            expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        })
        it('test 3', ()=>{
            expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        })
        it('test 4', ()=> {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        })
        it('test 5', ()=>{
            expect(movieTheater.ageRestrictions()).to.equal(`There are no age restrictions for this movie`);
        })
    })

    describe('moneySpent', ()=>{

        it('test 1', ()=>{
            expect(movieTheater.moneySpent(2,['Nachos'],['Soda'])).to.equal(`The total cost for the purchase is 38.50`)
        })
        it('test 2', ()=>{
            expect(movieTheater.moneySpent(5,['Nachos'],['Soda'])).to.equal(`The total cost for the purchase with applied discount is 66.80`)
        })

        it('test 3', ()=>{
            expect(() => movieTheater.moneySpent("2",['Nachos'],['Soda'])).to.throw('Invalid input');
        })
        it('test 4', ()=>{
            expect(() => movieTheater.moneySpent(2,'Nachos',['Soda'])).to.throw('Invalid input');
        })
        it('test 5', ()=>{
            expect(() => movieTheater.moneySpent(2,['Nachos'],'Soda')).to.throw('Invalid input');
        })
    })

    describe('reservation',()=>{
        it('test 1',()=>{
            expect(()=> movieTheater.reservation('asd','asd')).to.throw('Invalid input');
        });
        it('test 2',()=>{
            expect(()=> movieTheater.reservation([],'asd')).to.throw('Invalid input');
        })
        it('test 3',()=>{
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }],0)).to.equal(2);
        })
    })
})