const decypher = (...str) => {
  //YOUR CODE HERE
  str = str.join('').split(' ')
  let num = ''
  let numbers = '1234567890'
  let last
  let second
  let len
  let arr = []
  return str.map(elem => {
    for (let i = 0; i < elem.length; i++){
    if (numbers.indexOf(elem[i]) >= 0) {
      num += elem[i]
    }
    if (numbers.indexOf(elem[i-1])>=0 && numbers.indexOf(elem[i])<0){
      last = elem[i]
    }
    second = elem[elem.length-1]
  }
  len = num.length
  num = String.fromCharCode(num)
  return `${num}${second}${elem.slice(len, elem.length - 2)}${last}`
  })
};
module.exports = { decypher };
