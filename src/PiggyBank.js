class PiggyBank {

  constructor() {
    this.coins = null;
  }

  addCoins(amount) {
    this.coins += amount;
  }

  countCoins() {
    return this.coins
  }

  shake() {
    if ( this.coins != null ) {
    return "cling"
    }
    return false
   }

  break() {
    return this.countCoins();
  }

}
