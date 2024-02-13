import { expect } from "chai";
import { recipeSelection } from "./recipeSelection.js";

describe('test suite', function(){

    describe('isTypeSuitable', ()=>{

        it('test 1',()=>{
            expect(recipeSelection.isTypeSuitable('Meat','Vegetarian')).to.equal("This recipe is not suitable for vegetarians");
        })
        it('test 2',()=>{
            expect(recipeSelection.isTypeSuitable('Meat','Vegan')).to.equal("This recipe is not suitable for vegans");
        })
        it('test 3',()=>{
            expect(recipeSelection.isTypeSuitable('Dairy','Vegan')).to.equal("This recipe is not suitable for vegans");
        })
        it('test 4',()=>{
            expect(()=>recipeSelection.isTypeSuitable(12,12)).to.throw('Invalid input');
        })
        it('test 5',()=>{
            expect(()=>recipeSelection.isTypeSuitable("12",12)).to.throw('Invalid input');
        })
        it('test 6',()=>{
            expect(()=>recipeSelection.isTypeSuitable(12,"12")).to.throw('Invalid input');
        })
        it('test 7',()=>{
            expect(recipeSelection.isTypeSuitable("Meat","Meat")).to.equal('This recipe is suitable for your dietary restriction');
        })
    })

    describe('isItAffordable',()=>{
       
        it('test 1',()=>{
            expect(recipeSelection.isItAffordable(12,0)).to.equal(`You don't have enough budget to afford this recipe`)
        });
        it('test 2',()=>{
            expect(recipeSelection.isItAffordable(12,15)).to.equal(`Recipe ingredients bought. You have 3$ left`)
        })
        it('test 3',()=>{
            expect(()=>recipeSelection.isItAffordable("12",15)).to.throw(`Invalid input`)
        })
        it('test 4',()=>{
            expect(()=>recipeSelection.isItAffordable(12,"15")).to.throw(`Invalid input`)
        })
    })

    describe('getRecipesByCategory',()=>{
        it('test 1',()=>{
            expect(()=>recipeSelection.getRecipesByCategory({},'meat')).to.throw(`Invalid input`)
        });
        it('test 2',()=>{
            expect(()=>recipeSelection.getRecipesByCategory([],123)).to.throw(`Invalid input`)
        });
        it('test 3', ()=>{
            let arr = [ 'Spicy Tofu Stir-Fry', 'dogs' ];
            expect(recipeSelection.getRecipesByCategory([{title:"Spicy Tofu Stir-Fry",category:"Asian"},{title:"dogs",category:"Asian"}],'Asian')).to.eql([ 'Spicy Tofu Stir-Fry', 'dogs' ]);
        })

    })
})