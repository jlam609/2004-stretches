//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

const directory = (obj) => {
  //code in here
  function makeString(obj, str = '', map = {}){
    let objKeys = Object.keys(obj)
    for (let i = 0; i < objKeys.length; i++){
      str += str === '' ? objKeys[i]:`/${objKeys[i]}`
      if (typeof obj[objKeys[i]] === 'object' && !Array.isArray(obj[objKeys[i]])){
        makeString(obj[objKeys[i]], str, map)
      }
      else{
        map[str] = obj[objKeys[i]]
      }
    }
    console.log(map)
    return map
  }
  return makeString(obj)
};

module.exports = { directory };
