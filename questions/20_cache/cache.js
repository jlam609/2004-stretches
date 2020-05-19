// see test specs

function cache(func) {
  // YOUR CODE
if (typeof func !== 'function') throw new Error('Input must be a function.')
let map = {}
return invokeOnce = (...num) => {
  if (num in map) return map[num]
   else  {
     map[num] = func(...num)
     return map[num]
   }
  }
}

module.exports = { cache };
