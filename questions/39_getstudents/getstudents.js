const axios = require('./axios');
//using the *fake* API-endpoint ... https://fullstack.com/api/cohort2004
//create a function that takes a student name and uses axios to hit the endpoint with a get request
//returning that specific student as specified in the test
//* you don't need to NPM i axios for this test... Only work within this file and use promises

const getStudent = (name) => {
  if (typeof name !== 'string') throw new Error('must be string')
  //code in here
  return axios.get(`https://fullstack.com/api/cohort2004`)
  .then(res => {
    for (let student in res.data){
      if (res.data[student].name === name){
        return ({
          count:Object.values(res.data).length,
          student:{...res.data[student]}
        })
      }
    }
    return ({
      count:Object.values(res.data).length,
      student: "no student found"
    })
  })
  .catch(e => {throw new Error(e)})

};

module.exports = { getStudent };
