// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (obj1, obj2) => {
  //enter code here
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') throw new Error('must be object')
  let cakes = 0
  for (let keys in obj2){
    if (!obj1[keys]) return cakes;
    else{
      if (obj2[keys] - obj1[keys] < 0) return cakes
      obj2[keys] = obj2[keys] - obj1[keys]
    }
}
console.log(obj2)
  cakes++
  return btownbake(obj1, obj2)
};

module.exports = { btownbake };
