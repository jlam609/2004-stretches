const findBy = (arr, key, val) => {
  //YOUR CODE HERE
  return arr.find(elem => elem[key] === val)
};

module.exports = { findBy };
