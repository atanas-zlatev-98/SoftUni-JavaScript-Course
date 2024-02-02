function cards(){

    let card = {
        faces:[2,3,4,5,6,7,8,9,10,J,Q,K,A],
        suits:[s,h,d,c],

        getCard(){
            return this.faces + ' ' + this.suits;
        }
    }

    return card
    
}
let solution = cards();
console.log(solution.getCard('A', 'S'));