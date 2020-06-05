/*
Digital root is the recursive sum of all the digits in a number.
ex.
16  -->  1 + 6 = 7
55555 --> 5 + 5 + 5 + 5 + 5 = 25 --> 2 + 5 --> 7 
*/

//YOUR CODE GOES HERE
class digitalRoot {
    constructor(){
        this.root = function(num){
            if(typeof num !== 'number' || num < 0) return null
            num = String(num).split('')
                let total = 0
                for (let i = 0; i < num.length; i++){
                total += Number(num[i])
                }
                return String(total).length > 1 ? this.root(total): total
        }
    }
}
module.exports = { digitalRoot };
