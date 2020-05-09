// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
    #sides;
    #dice;
    #history;
  constructor(number, total){
    if (number <= 0 || total <= 0 || typeof(number)!== 'number' || typeof(total)!== 'number') throw 'error';
    this.sides = number
    this.dice = total
    this.history = []
  }
  roll = () => {
    let arr = []
    for (let i = 0; i < this.dice; i++){
      arr.push(Math.ceil(Math.random() * this.sides))
    }
    this.history.push(arr)
    return arr
}
}


module.exports = { DiceRoller };
