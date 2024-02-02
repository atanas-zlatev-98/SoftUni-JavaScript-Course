import {isOddOrEven} from '../EvenOdd.js';
import { expect } from 'chai';

describe('Test isOddOrEven', () => { 
    it('should return odd for pesho', ()=>{
        expect(isOddOrEven('pesho')).to.equal('odd');
    });
    it('should return even for John', ()=>{
        expect(isOddOrEven('john')).to.equal('even');
    })
    it('should return undefined for []', ()=>{
        expect(isOddOrEven([])).to.equal(undefined);
    })
    it('should return undefined for 123', ()=>{
        expect(isOddOrEven(123)).to.equal(undefined);
    })
 })