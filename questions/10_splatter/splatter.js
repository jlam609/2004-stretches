//write the splatter function

const splatter = (arg) => {
  //write code here
  let total = 0
  for (let items in arg){
    console.log(arg[items])
  total += arg[items]
  }
  return total
};

module.exports = { splatter };
