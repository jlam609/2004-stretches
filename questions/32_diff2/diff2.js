// diffTwo should return all pairs of integers from a given array of integers that have a difference of 2.
// the returning array of pairs should be sorted in ascending order of values.
//diffTwo([1, 2, 3, 4])=>[[1, 3], [2, 4]]

const diffTwo = (arr) => {
    if (!Array.isArray(arr)) throw new Error ('must be an array')
    let map = {}
    let res = []
    arr = arr.sort((a,b) => a-b)
    for (let i = 0; i < arr.length; i++){
        if (arr[i] in map) {
            map[arr[i]+2] = arr[i]
            map[arr[i]-2] = arr[i]
            res.push([map[arr[i]], arr[i]] )
        }
        else {
            map[arr[i]+2] = arr[i]
            map[arr[i]-2] = arr[i]
        }
    }
    return res
};

module.exports = { diffTwo };
