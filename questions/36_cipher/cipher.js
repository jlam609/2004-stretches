const encrypt = (str) => {
  //YOUR CODE HERE
  str = str.split(' ')
  return str.map(elem => {
    let code = elem.charCodeAt(0)
    let first = elem[elem.length-1]
    let last = elem[1]
    return `${code}${first}${elem.slice(2,elem.length-1)}${last}`
  }).join(' ')
};

module.exports = { encrypt };
