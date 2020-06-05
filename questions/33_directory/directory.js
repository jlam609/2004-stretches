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
    for (let keys in obj){
      str += keys
      if (typeof obj[keys] === 'object' && !Array.isArray(obj[keys])){
        str += str === '' ? keys:`/${keys}`
        makeString(obj[keys], str, map)
      }
      else{
        map[str] = obj[keys]
        str = ''
      }
    }
    console.log(map)
    return map
  }
  return makeString(obj)
};

module.exports = { directory };
