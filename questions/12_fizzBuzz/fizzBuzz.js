const fizzBuzz = (num) => {
  //YOUR CODE HERE
  if (num % 1 !== 0 || num <= 0) throw 'must be whole number'
  let arr = []
  for (let i = 0; i < num; i++){
    if (i%3 && i %5) arr.push('FizzBuzz')
    else if (i%3) arr.push('Fizz')
    else if (i%5) arr.push('Buzz')
    else arr.push(i)
  }
  return arr;
};
module.exports = { fizzBuzz };
