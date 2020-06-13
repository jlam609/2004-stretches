//	Chat is almost complete - solve the last spec

class Chat {
  constructor() {
    this.listeners = {};
  }
  join(str, fn) {
    Object.values(this.listeners).forEach((listener) =>
      listener(`${str} has joined chat!`)
    );
    const listeners = this.listeners
    this.listeners[str] = fn;
    return {
      talk: function(word) {
        for (let key in listeners){
          if (key !== str){
            listeners[key](`${str} says ${word}`)
          }
        }
    }
  }
  }
}

module.exports = { Chat };
