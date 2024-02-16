import { expect } from "chai";
import {onlineStore} from './onlineStore.js';

describe('Test Suite', function(){

    describe('isProductAvailable(product, stockQuantity)',()=>{
        it('return invalid input for number first param', ()=>{
            expect(()=>onlineStore.isProductAvailable(12,12)).to.throw('Invalid input.');
        })
        it('return invalid input for string second param', ()=>{
            expect(()=>onlineStore.isProductAvailable("12","12")).to.throw('Invalid input.');
        });
        it('return out of stock for 0',()=>{
            expect(onlineStore.isProductAvailable('Meat',0)).to.equal(`Sorry, Meat is currently out of stock.`)
        })
        it('return out of stock for -1',()=>{
            expect(onlineStore.isProductAvailable('Meat',-1)).to.equal(`Sorry, Meat is currently out of stock.`)
        })
        it('return available for purchase for 10',()=>{
            expect(onlineStore.isProductAvailable('Meat',10)).to.equal(`Great! Meat is available for purchase.`)
        })
    })

    describe(`canAffordProduct(productPrice, accountBalance)`, ()=>{
        it('return invalid input for string first param', ()=>{
            expect(()=>onlineStore.canAffordProduct("12",12)).to.throw('Invalid input.');
        })
        it('return invalid input for string second param', ()=>{
            expect(()=>onlineStore.canAffordProduct(12,"12")).to.throw('Invalid input.');
        });
        it('sufficient funds to buy this product.', ()=>{
            expect(onlineStore.canAffordProduct(12,11)).to.equal("You don't have sufficient funds to buy this product.");
        })
        it('Product purchased for 3', ()=>{
            expect(onlineStore.canAffordProduct(12,15)).to.equal(`Product purchased. Your remaining balance is $3.`);
        })
        it('Product purchased for 0', ()=>{
            expect(onlineStore.canAffordProduct(12,12)).to.equal(`Product purchased. Your remaining balance is $0.`);
        })
    })

    describe('getRecommendedProducts(productList, category)',()=>{
        it('recommended products',()=>{
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" },{ name: "DVD", category: "Movie" }],'Movie')).to.equal('Recommended products in the Movie category: DVD')
        });
        it('no recommended products',()=>{
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" },{ name: "DVD", category: "Movie" }],'Football')).to.equal('Sorry, we currently have no recommended products in the Football category.')
        });
        it('return invalid input for string first param', ()=>{
            expect(()=>onlineStore.getRecommendedProducts("12",'Movie')).to.throw('Invalid input.');
        })
        it('return invalid input for number second param', ()=>{
            expect(()=>onlineStore.getRecommendedProducts([],12)).to.throw('Invalid input.');
        });
    })
})