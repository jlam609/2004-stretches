const balanced = (arr) => {
  //YOUR CODE HERE
  let leftSum = 0
  let rightSum = arr.slice(1).reduce((a,b) => a + b)
  for (let i = 0; i < arr.length; i++){
    if (leftSum === rightSum) return i
    else {
      leftSum += arr[i]
      rightSum -= arr[i + 1]
    }
  }
  return -1
};

module.exports = balanced;
