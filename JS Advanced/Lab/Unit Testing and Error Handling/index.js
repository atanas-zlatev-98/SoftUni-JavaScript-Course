//import { describe,it } from "mocha";
import {add} from './util.js';
import {expect} from 'chai';

describe('Suite Demo', function() {
    it('works', function() {
        // do nothing
    });

    it('works verily', function() {
        // do nothing
    });
    it('works splendid', function() {
        // do nothing
    });
});

describe('Suite Demo', function() {
    it('works', function() {
       if(add(1,1) !== 2){
        throw new Error('Addition did not work');
       }
    });
});

// chai
describe('Suite Demo', function() {
    it('works', function() {
        expect(add(1,1)).to.equal(2, 'addition did not work');
    });
});