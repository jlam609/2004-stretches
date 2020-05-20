const delay = (str, time) => {
  //Your code here
 return new Promise((resolve, reject) => {
    resolve(setTimeout(str, time))
  })
  .then(res => console.log(res))
};

module.exports = { delay };
