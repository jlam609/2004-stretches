// - "monkey-patching" means changing the behavior of built-in code at runtime.
// - your job is to monkey-patch the Array class, by adding a method called "countBy"
// - countBy should optionally take a function argument
// - countBy returns an object whose keys correspond to the elements in the array it is called on, and whose values correspond to the number of times that element appears in the array
// - when countBy is passed a function argument "fn", the values correspond to the number of times that key was returned by fn.
// - NB: monkey-patching is generally not good, do not do it, this is just an exercise
// - Also NB: repl.it doesn't let you monkey patch! but the chrome console does.

//code goes here
Array.prototype.countBy = function(func = undefined){
    let map = {}
    if (func !== undefined){
    for (let i = 0; i < this.length; i++){
        let val = func(this[i])
        if (val in map) map[val]++
        else map[val] = 1
    }
    return map
}
for (let i = 0; i < this.length; i++){
    if (this[i] in map) map[this[i]]++
    else map[this[i]] = 1
}
    return map
}