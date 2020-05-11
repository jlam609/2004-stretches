//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/*
examples:
1 // I
2 // II
3 // III
4 // IV
1994 // MCMXCIV
*/

const romanInteger = (num) => {
  //YOUR CODE HERE
  if (typeof num !== 'number' || num <= 0 || num > 3999) throw 'error'
  let roman = {
    M:1000,
    D:500,
    C:100,
    L:50,
    X:10,
    V:5,
    I:1
  }
  let str = []
  let objKeys = Object.keys(roman)
  while (num > 0) {
    for (let i = 0; i < objKeys.length; i++){
      if (roman[objKeys] <= num) {
        num -= roman[objKeys]
        str.push(objKeys)
        i--
  }
  }
  return str.join('')
}
};

module.exports = { romanInteger };
