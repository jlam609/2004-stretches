//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (obj,count = 0) => {
  //write code here
  if (typeof obj !== 'object') throw new Error('must be an OBJECT')
  for (let keys in obj){
    obj['depth'] = count
    if (typeof obj[keys] === 'object') recordDepth(obj[keys], count+1)
    else{
    }
  }
  return obj
};

module.exports = { recordDepth };
