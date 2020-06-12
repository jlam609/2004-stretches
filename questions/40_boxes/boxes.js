//YOUR CODE HERE
class Box{
    constructor(color, capacity){
        this.color = color;
        this.capacity = capacity;
        this.contents = []
    }
    pack = (color, capacity) => {
        this.contents.push(color)
        console.log(this.contents[0])
    }
}
module.exports = { Box };
