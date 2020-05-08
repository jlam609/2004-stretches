// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  // YOUR CODE
  let newObj = {}
  for (let keys in obj){
    if (obj[keys] === null || obj[keys]=== undefined) continue;
    newObj[keys] = obj[keys]
  }
  return newObj
};

module.exports = { trim };
