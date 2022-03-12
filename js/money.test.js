const assert = require('assert');

class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  divide(divisor) {
    return new Money(this.amount / divisor, this.currency);
  }
}

class Portfolio {
  constructor() {
    this.moneys = [];
  }

  add(...moneys) {
    this.moneys = this.moneys.concat(moneys);
  }

  evaluate(currency) {
    const total = this.moneys.reduce((sum, money) => {
      return sum + money.amount;
    }, 0);
    return new Money(total, currency);
  }
}

let fiver = new Dollar(5);
let tenner = fiver.times(2);
assert.strictEqual(tenner.amount, 10, 'Expected 5 USD * 2 = 10 USD');

// 5 USD * 2 = 10 USD
let fiveDollars = new Money(5, 'USD');
let tenDollars = new Money(10, 'USD');
assert.deepStrictEqual(fiveDollars.times(2), tenDollars);

// 10 EUR * 2 = 20 EUR
let tenEuros = new Money(10, 'EUR');
let twentyEuros = new Money(20, 'EUR');
assert.deepStrictEqual(tenEuros.times(2), twentyEuros);

// 4000 KRW / 4 = 1000 KRW
let originalMoney = new Money(4002, 'KRW');
let actualMoneyAfterDivision = originalMoney.divide(4);
let expectedMoneyAfterDivsion = new Money(1000.5, 'KRW');
assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivsion);

// 5 USD + 10 USD = 15 USD
let fifteenDollars = new Money(15, 'USD');
let portfolio = new Portfolio();
portfolio.add(fiveDollars, tenDollars);
assert.deepStrictEqual(portfolio.evaluate('USD'), fifteenDollars);
