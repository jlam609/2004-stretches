// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.newState = {};
    this.prevState = [];
    this.called = false
  }
  setState(obj) {
    this.prevState.push(obj)
    for (let key in this.state){
      this.newState[key] = this.state[key]
    }
    for (let key in obj){
      this.newState[key] = obj[key]
    }
    return this.newState     
  }
  goBack(){
    if (this.called === false) {
      this.called = true;
      this.prevState.pop()
    }
    let prevState = this.prevState.pop()
      for (let key in prevState){
        this.state[key] = prevState[key]
      }
  }
}

module.exports = { StatefulThing };
