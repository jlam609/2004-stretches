/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arr, key, val) {
  // YOUR CODE
  
  return arr.sort((a,b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    else return 0 
  }).map(elem => elem = elem[val])
  
}

module.exports = { sortOrder };
