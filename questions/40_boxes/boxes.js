//YOUR CODE HERE
class Box{
    constructor(color, capacity){
        this.color = color;
        this.capacity = capacity;
        this.contents = []
    }
    pack = (color, capacity) => {
        if (this.capacity === 0) throw new Error ('capacity met')
        this.contents.push(new Box(color, capacity))
        this.capacity -= capacity
    }
    unpack = () => {
        let arr = []
        if (!this.contents.length){
            arr.push(this.color)
        }else{
            arr.push(this.color)
                for (let i = 0; i < this.contents.length; i++){
                    arr.push(...this.contents[i].unpack())
                }
            }
        return arr
    }
}
module.exports = { Box };
