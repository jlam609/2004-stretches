// Write a function that takes an array and a target sum
// This function should return an array of the target's sum pair or null if none found

//ie:: twoNumberSum([3, -2, 7, 29, 12, -5, 8, 10], 3) => [-5, 8]

//***Your solution should NOT include nested loops of any type***

const twoNumberSum = (arr, target) => {
  //write code here
  let map = {}
  let res = []
  for (let i = 0; i < arr.length; i++){
    if (map[arr[i]]) res.push(map[arr[i]], arr[i])
    else map[target-arr[i]] = arr[i]
  }
  return res
};

module.exports = { twoNumberSum };
