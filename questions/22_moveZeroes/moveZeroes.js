const moveZeroes = (arr) => {
  //YOUR CODE HERE
  let temp = []
for (let i = 0; i < arr.length; i++){
  if (arr[i] === 0) {
    temp.push(arr[i])
    arr.splice(i, 1)
    i--
  }
}
  for (let i = 0; i < temp.length; i++){
    arr.push(temp[i])
  }
  return arr
};

module.exports = { moveZeroes };
