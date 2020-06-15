// Make your own stretch
// try to solve for a challenging problem
// write at minium three test specs
// Jest documentation: https://github.com/sapegin/jest-cheat-sheet
// submit the stretch with solution code and test specs passing

const makeyourown = (arr) => {
  if (!Array.isArray(arr)) throw new Error('must be an array')
  return arr.reduce((a,b) => a + b)
};

module.exports = { makeyourown };
