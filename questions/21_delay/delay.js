const delay = (str, time) => {
  //Your code here
 return new Promise((resolve) => {
    setTimeout(() => resolve(str), time)
  })
};

module.exports = { delay };
