//write a function that takes a function, and makes it callable with two invocations

const extensions = (func) => {
    if (typeof func !== 'function') throw new Error('must be a function')
    return function(...args){
    console.log(extensions.call({func}, [...args]))
    }
};

module.exports = { extensions };
