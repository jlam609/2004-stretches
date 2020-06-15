// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  //write code here
  constructor(arr){
    if (!Array.isArray(arr)) throw new Error('must be an array')
    this.count = 0;
    this.next = () => {
      if (this.count === arr.length){
        return {done:true, value:undefined}
      }
      else {
        this.count++
        return {done:false, value: arr[this.count-1]}
      }
    }
  }
}

module.exports = { Iterator };
