// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe, supplies) => {
  //enter code here
  if (typeof recipe !== 'object' || typeof supplies !== 'object') throw new Error('must be object')
  let cakes = 0
  for (let keys in recipe){
      if (!supplies[keys]) return cakes
      if (((supplies[keys] - recipe[keys]) < 0)) {
        return cakes
      }
      supplies[keys] = (supplies[keys] - recipe[keys])
    }
    cakes++
  return cakes += btownbake(recipe, supplies)
};

module.exports = { btownbake };
