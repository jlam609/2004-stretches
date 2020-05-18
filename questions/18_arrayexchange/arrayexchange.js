//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (arr1, arr2) => {
    if (typeof arr1 !== 'object' || typeof arr2 !== 'object') throw new Error('must be array')
    let temp = arr1.slice().reverse()
    while (arr1.length > 0) arr1.pop()
    arr2 = arr2.reverse()
    for (let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i])
    }
    while (arr2.length > 0) arr2.pop()
    for (let i = 0; i < temp.length; i++){
        arr2.push(temp[i])
    }
};

module.exports = { arrayexchange };
