import { expect } from "chai";
import { lottery } from "./Lottery.js";

describe('test suite', ()=>{

    describe('buyLotteryTicket (ticketPrice,ticketCount,buy)',()=>{

        it('retun invalid input for string first param',()=>{
            expect(()=>lottery.buyLotteryTicket('12',12,true)).to.throw('Invalid input!');
        });
        it('retun invalid input for string second param',()=>{
            expect(()=>lottery.buyLotteryTicket(12,"12",true)).to.throw('Invalid input!');
        })
        it('retun invalid input for 0 first param',()=>{
            expect(()=>lottery.buyLotteryTicket(0,12,true)).to.throw('Invalid input!');
        })
        it('retun invalid input for 0 second param',()=>{
            expect(()=>lottery.buyLotteryTicket(10,0,true)).to.throw('Invalid input!');
        })
        it('retun unable to buy for false boolean',()=>{
            expect(()=>lottery.buyLotteryTicket(12,12,false)).to.throw("Unable to buy lottery ticket!");
        })
        it('retun You bought for correct inputs',()=>{
            expect(lottery.buyLotteryTicket(1,12,true)).to.equal("You bought 12 tickets for 12$.");
        })
    })

    describe('checkTicket (ticketNumbers,luckyNumbers)',()=>{
        it('retun invalid input for string first param',()=>{
            expect(()=>lottery.buyLotteryTicket('12',[])).to.throw('Invalid input!');
        });
        it('retun invalid input for string second param',()=>{
            expect(()=>lottery.checkTicket([],"12")).to.throw('Invalid input!');
        });

        it('retun invalid input for first param length 5',()=>{
            expect(()=>lottery.checkTicket([1,2,3,4,5],[])).to.throw('Invalid input!');
        });
        it('retun invalid input for second param length 5',()=>{
            expect(()=>lottery.checkTicket([],[1,2,3,4,5])).to.throw('Invalid input!');
        });
        it('retun JackPot',()=>{
            expect(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5,6])).to.equal('You win the JACKPOT!!!');
        });
        it('return check your reward',()=>{
            expect(lottery.checkTicket([1,5,3,4,5,6],[1,2,5,4,5,6])).to.equal('Congratulations you win, check your reward!');
        })
    })

    describe('secondChance (ticketID, secondChanceWinningIDs)',()=>{
        
        it('return invalid input',()=>{
            expect(()=> lottery.secondChance("12",[1,2,3])).to.throw('Invalid input!');
        });
        it('return invalid input',()=>{
            expect(()=> lottery.secondChance(12,"[1,2,3]")).to.throw('Invalid input!');
        })
    })
})