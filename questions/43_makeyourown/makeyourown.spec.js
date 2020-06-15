const { makeyourown } = require('./makeyourown');

describe('makeyourown functionality', () => {
  it('takes an array only', () => {
    expect(() => makeyourown(5)).toThrow('must be an array')
  });
  it('adds up all values of an array', () => {
    expect(makeyourown([5,4,3,2,1])).toEqual(15)
  })
  it('returns a number', () => {
    const result = makeyourown([1,3,4,5])
    expect(typeof result).toEqual('number')
  })
});
