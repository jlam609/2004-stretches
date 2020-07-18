const fold = (arr, int) => {
  //YOUR CODE HERE
  let arrDup = arr.slice()
  let helper = (arr, int) => {
      if (int <= 0) return arr
      let newArr = []
      while (arr.length){
        let val = arr.length > 1 ? arr.shift() + arr.pop() : arr.shift()
        newArr.push(val)
      }
      return helper(newArr, int -1)
  }
  return helper(arrDup, int)
};

module.exports = fold;
