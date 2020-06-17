//Add two methods to this box class.

class Box {
  //Solution code for Boxes part 1-3
  constructor(color, capacity) {
    this.color = color;
    this.capacity = capacity;
    this.contents = [];
  }
  pack(col, cap) {
    if (this.contents.length !== this.capacity) {
      this.contents.push(new Box(col, cap));
    } else {
      throw new Error('Capacity Met!');
    }
  }
  unpack() {
    const result = [];
    if (!this.contents.length) {
      result.push(this.color);
    } else {
      result.push(this.color);
      for (let i = 0; i < this.contents.length; i++) {
        result.push(...this.contents[i].unpack());
      }
    }
    return result;
  }
  movingVan(dur) {
    return setTimeout(() => this.unpack(), dur);
  }
  expand(num, arr){
    if (typeof num !== 'number') throw new Error( 'must be number')
    this.capacity += num
    for (let i = 0; i < arr.length; i++){
      this.pack(arr[i][0], arr[i][1])
    }
  }
  loot(index){
    return this.contents[index] ? this.contents[index]: this.contents[Math.floor(Math.random() * this.contents.length)]
  }
  //*****YOUR CODE STARTS HERE******
}

module.exports = { Box };
