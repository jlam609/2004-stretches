/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = (str) => {
  //YOUR CODE
  str = str.toString().split(',').join('').split('!').join('').split(' ').join('')
  let i = 0;
  let j = str.length - 1;
  while (i <= j){
    if (str[i].toLowerCase() !== str[j].toLowerCase()) return false;
    else {
      i++;
      j--;
    }
  }
  return true;
};

module.exports = { validPalindrome };
