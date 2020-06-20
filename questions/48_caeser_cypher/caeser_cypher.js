// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  // YOUR CODE
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numbers = '0123456789'
  let res = ''
  
  for (let i = 0; i < str.length; i++){
    let char = str[i]
    if (letters.indexOf(char) < 0 && numbers.indexOf(char) < 0 && upperLetters.indexOf(char) < 0) throw new Error('must be alphanumeric')
    if (letters.indexOf(char) >= 0){
        let index = letters.indexOf(char) + shift
        if (index < 0) index = letters.length - Math.abs(index % letters.length)
        if (index > letters.length - 1) index = index % letters.length
        res += letters[index]
    }
    if (upperLetters.indexOf(char) >= 0){
      let index = upperLetters.indexOf(char) + shift
      if (index < 0) index = upperLetters.length - Math.abs(index % upperLetters.length)
      if (index > upperLetters.length - 1) index = index % upperLetters.length
      res += upperLetters[index]
  }
    if (numbers.indexOf(char) >= 0){
      let index = numbers.indexOf(char) + shift
      if (index < 0) index = numbers.length - Math.abs(index % numbers.length)
      if (index > numbers.length - 1) index = index % numbers.length
       res += numbers[index]
  }
  }
  return res
};

module.exports = { encryptString };
