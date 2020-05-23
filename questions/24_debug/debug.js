//YOU WILL BE EDITING THIS CODE
class CoffeeShop {
    constructor() {
    this.pendingOrders = [],
    this.completedOrders = [],
    this.menu = ['mocha', 'latte', 'flat-white', 'drip', 'espresso']
  }

  inputOrder = (str)  => {
    this.pendingOrders.push(str);
  }

  makeCoffee = () => {
    const coffeeOrder = this.pendingOrders.shift();

    this.completedOrders.push(coffeeOrder);
  }

  printMenu = () => {
    return this.menu;
  }
}
const coffee = new CoffeeShop()
console.log(CoffeeShop)
module.exports = { CoffeeShop };
