const cartesian = (arr) => {
  //YOUR CODE GOES HERE
  let map = arr.reduce((accum, elem) => {
    if (elem in accum) accum[elem]++
    else accum[elem] = 1
    return accum
  }, {})
  let hash = {}
  hash.n = (map.n - map.s) > 0 ? map.n-map.s : 0
  hash.s = (map.s - map.n) > 0 ? map.s-map.n : 0
  hash.e = (map.e - map.w) > 0 ? map.e-map.w : 0
  hash.w = (map.w - map.e) > 0 ? map.w-map.e : 0
  for (let keys in hash){
    if (hash[keys] > 0) return hash
  }
  return 'These directions don\'t go anywhere!'
};

module.exports = { cartesian };
