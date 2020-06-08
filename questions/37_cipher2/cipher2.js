const decypher = (...str) => {
  //YOUR CODE HERE
  str = str.join('').split(' ')
  let numbers = '1234567890'
  return str.map(elem => {
    let num = '', last, second, trans
    for (let i = 0; i < elem.length; i++){
    if (numbers.indexOf(elem[i]) >= 0) {
      num += elem[i]
    }
    if (numbers.indexOf(elem[i-1])>=0 && numbers.indexOf(elem[i])<0){
      last = elem[i]
    }
    second = elem[elem.length-1]
  }

  trans = String.fromCharCode(num)
  return elem.slice(num.length + 1) !== '' ? `${trans}${second}${elem.slice(num.length + 1, elem.length - 1)}${last}` : `${trans}${last}`
  }).join(' ')
};
module.exports = { decypher };
