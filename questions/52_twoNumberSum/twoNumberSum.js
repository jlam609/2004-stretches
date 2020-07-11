// Write a function that takes an array and a target sum
// This function should return an array of the target's sum pair or null if none found

//ie:: twoNumberSum([3, -2, 7, 29, 12, -5, 8, 10], 3) => [-5, 8]

//***Your solution should NOT include nested loops of any type***

const twoNumberSum = (arr, target) => {
  //write code here
  arr = arr.sort((a,b) => a-b)
  let i = 0
  let j = arr.length-1
  let res = []
  while (i< j){
    let sum = arr[i] + arr[j]
    if (sum === target ) {
      res.push(arr[i],arr[j])
      i++, j--
    }
    if (sum < target) i++
    if (sum > target) j--
  }
  console.log(res)
  return res
};

module.exports = { twoNumberSum };
