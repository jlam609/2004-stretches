// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let count = 1;
    let arr = []
    let row = 1
    while (n > 0){
        let curRow = ''
        for (let i = 0; i < row; i++ ){
            curRow += String(count)
            count++
        }
        arr.push(curRow)
        row++
        n--
    }
    return arr.join('\n')
};

module.exports = { floydsTriangle };
