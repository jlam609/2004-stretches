//write the splatter function

const splatter = (...arg) => {
  //write code here
  return arg.reduce((acc, item) => {
    Object.entries(item).forEach( ([key, value]) => {
      acc += value;
    })
    return acc
  }, 0)
};

module.exports = { splatter };
