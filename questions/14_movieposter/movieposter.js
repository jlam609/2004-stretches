//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (arr) => {
  //write code here
  if (arr.length <= 0) throw 'length too short'
  let length = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > length) length = (arr[i].length) + 4
  }
  let stars = ''
  while (stars.length < length) stars += '*'
  arr.push(stars); arr.unshift(stars)
  return arr.map(elem => {
    if (elem.length < length) {
      elem = `* ${elem} `
      while(elem.length < length - 1){
      elem += ' '
    }
    elem += '*'
    return elem
  }
  return elem
  }).join('\n')
};

module.exports = { movieposter };
