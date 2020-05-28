const cartesian = (arr) => {
  //YOUR CODE GOES HERE
  let value = arr.reduce((accum, elem) => {
    if (elem === 's' && 'n' in accum && accum.n>0) accum['n']--
    if (elem === 'n' && 's' in accum && accum.s>0) accum['s']--
    if (elem === 'w' && 'e' in accum && accum.e>0) accum['w']--
    if (elem === 'e' && 'w' in accum && accum.w>0) accum['e']--
    else if (elem in accum) accum[elem]++
    else accum[elem] = 1
    return accum
  }, {})
  let arr1 = []
  console.log(value)
  for (let keys in value){
    
  }

};

module.exports = { cartesian };
