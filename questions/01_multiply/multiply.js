// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {
if (num1 === undefined || num2 === undefined) throw 'must give 2 numbers'
return num1 * num2
}
module.exports = { multiply };
