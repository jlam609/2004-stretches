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
  let map = {}
  for (let key in obj){
    arr = []
    while (obj[key].hasOwnProperty()){
      directory((obj[key]), arr)
    }
  }
};

module.exports = { directory };
