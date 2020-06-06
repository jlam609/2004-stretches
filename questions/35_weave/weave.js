// weave should take any number of arrays and return a singular array of all arrays interwoven.
// if one array is longer than another place a null value in its allocated place
// weave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]

const weave = (...arr) => {
  //enter code here
  let newArr = []
  while (arr.filter(elem => elem.length > 0).length > 0) {
  for (let i = 0; i < arr.length; i++){
    if (!Array.isArray(arr[i])) throw new Error('must be an array')
    newArr.push(arr[i][0] !== undefined ? arr[i].shift() : null)
    }
  }
return newArr
};

module.exports = { weave };
