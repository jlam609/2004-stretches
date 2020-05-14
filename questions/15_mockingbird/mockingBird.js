// repeater runs a function n times and returns an array of its outputs
const repeater = (func, n) => {
  // YOUR CODE
    let arr = []
    while (n > 0){
      arr.push(func())
      n--
    }
    return arr;
};

// see test specs to complete this stretch

module.exports = { repeater };
