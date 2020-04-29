// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
for (let i = 0; i < str1.length;i++){
  console.log(str1[i])
  if (!str2.includes(str1[i])) return false
}
return true;
};


module.exports = { checkAnagrams };
