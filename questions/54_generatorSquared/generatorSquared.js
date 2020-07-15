// Create a generator that squares its input until max limit
// Approved documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// Pass the specs provided

//write your function here

const sqauredGen = (num1, num2) => {
    return {
        next: () => {
            let i = num1 + 1
            while (i <= 1) i++
            return { 
                value: i**2
            }
        }
    }
}
module.exports = { sqauredGen };
