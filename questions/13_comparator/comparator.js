//write a func that takes two arg... selectKey and obj

const comparator = (selectKey, obj) => {
    for (let key in obj){
        if (selectKey in obj[key] && typeof (obj[key][selectKey]) === 'number') return obj.sort((a,b) => a[selectKey] - b[selectKey])
        else if (selectKey in obj[key]) return obj.sort((a, b) => {
            let nameA = a[selectKey].split(' ')[1].toUpperCase()
            let nameB = b[selectKey].split(' ')[1].toUpperCase()
            if (nameA < nameB) return -1
            if (nameA > nameB) return 1
            return 0;
        })
    }
    return 'incorrect key'
};

module.exports = { comparator };
