import { lookupChar } from "../CharLookup.js";
import { expect } from "chai";

describe('Test for Lookup Char', () => {
    it('should return undefined if the first parameter is not string', ()=>{
        expect(lookupChar(12,12)).to.equal(undefined);
    })
    it('should return undefined if the first parameter is not string', ()=>{
        expect(lookupChar('23','23')).to.equal(undefined);
    });
   
    it('should return undefined for floating-point number', ()=>{
        expect(lookupChar('peshu',25.4)).to.equal(undefined);
    });

    it('should return incorrect index for negative index', ()=>{
        expect(lookupChar('pesho',-23)).to.equal('Incorrect index');
    })

    it('should return incorrect index for pesho and index 20', ()=>{
        expect(lookupChar('pesho',23)).to.equal('Incorrect index');
    })
    
    it('should return s for atanas and index 5', ()=>{
        expect(lookupChar('atanas',5)).to.equal('s');
    })
    it('should return incorrect index for atanas and index 6', ()=>{
        expect(lookupChar('atanas',6)).to.equal('Incorrect index');
    })
 })