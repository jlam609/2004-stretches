//write a function that takes a function, and makes it callable with two invocations

const extensions = (func) => {
    if (typeof func !== 'function') throw new Error('must be a function')
    return function(a){
        if (typeof a !== 'number')throw new Error('must be number')
        return function(b){
            if (typeof b !== 'number')throw new Error('must be number')
            return func(a,b)
        }
    }
};

module.exports = { extensions };
