// - Write a chainable Calculator that can add, subtract,and multiply

class chainCalc {
  //write code here
  constructor(num){
    if (typeof num !== 'number')throw new Error('must be a number')
    this.result = num
  }
  add = (x) =>{
    this.result += x
    return this
  }
  sub = (x) => {
    this.result -= x
    return this
  }
  mul =(x) => {
    this.result *= x
    return this
  }
}

module.exports = { chainCalc };
