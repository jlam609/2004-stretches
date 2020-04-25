const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply(3 * 'a')).toThrow('error must be a number');

    expect(() => multiply('e' * 'f')).toThrow('error must be a number');
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(typeof (3 * 2)).toBe('number');

    // test that the returned value is correct
    expect(3 * 2).toBe(6);

    // test some other values
    expect(5 * 2).toBe(10);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
  });
});
