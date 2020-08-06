describe ("Piggy Bank", function() {

  var piggybank;

  beforeEach(function() {
    piggybank = new PiggyBank();
  });

  it("should accept coins and increase count", function() {
    piggybank.addCoins(1);
    expect(piggybank.countCoins()).toEqual(1)
  });

  it("should accept multiple coins and increase count", function() {
    piggybank.addCoins(5);
    expect(piggybank.countCoins()).toEqual(5)
  });

  it("should cling if there are coins", function() {
    piggybank.addCoins(1);
    expect(piggybank.shake()).toEqual('cling')
  });

  it("should not cling if there are coins", function() {
    expect(piggybank.shake()).toEqual(false)
  });

  it("should return coins when broken", function() {
    piggybank.addCoins(5);
    expect(piggybank.break()).toEqual(5)
  });

  it("should return null when broken and no coins have been added", function() {
    expect(piggybank.break()).toEqual(null)
  });


});
