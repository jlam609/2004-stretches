/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  // YOUR CODE
  return objs.reduce((accum, elem) => {
    let objKeys = Object.keys(elem)
    for (let i = 0; i < objKeys.length; i++){
    if (objKeys[i] in accum) accum[objKeys[i]] += elem[objKeys[i]]
    else {
      accum[objKeys[i]] = elem[objKeys[i]]
    }
  }
    return accum;
  }, {})
}

module.exports = { zip };
