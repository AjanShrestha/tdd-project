const assert = require('assert');
const Money = require('./money');
const Portfolio = require('./portfolio');

class MoneyTest {
  testMultiplication() {
    // 10 EUR * 2 = 20 EUR
    let tenEuros = new Money(10, 'EUR');
    let twentyEuros = new Money(20, 'EUR');
    assert.deepStrictEqual(tenEuros.times(2), twentyEuros);
  }

  testDivision() {
    // 4000 KRW / 4 = 1000 KRW
    let originalMoney = new Money(4002, 'KRW');
    let actualMoneyAfterDivision = originalMoney.divide(4);
    let expectedMoneyAfterDivsion = new Money(1000.5, 'KRW');
    assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivsion);
  }

  testAddition() {
    // 5 USD + 10 USD = 15 USD
    let fiveDollars = new Money(5, 'USD');
    let tenDollars = new Money(10, 'USD');
    let fifteenDollars = new Money(15, 'USD');
    let portfolio = new Portfolio();
    portfolio.add(fiveDollars, tenDollars);
    assert.deepStrictEqual(portfolio.evaluate('USD'), fifteenDollars);
  }

  getAllTestMethods() {
    let moneyPrototype = MoneyTest.prototype;
    let allProps = Object.getOwnPropertyNames(moneyPrototype);
    let testMethods = allProps.filter((p) => {
      return typeof moneyPrototype[p] === 'function' && p.startsWith('test');
    });
    return testMethods;
  }

  runAllTests() {
    let testMethods = this.getAllTestMethods();
    testMethods.forEach((m) => {
      console.log('Running: %s()', m);
      let method = Reflect.get(this, m);
      try {
        Reflect.apply(method, this, []);
      } catch (e) {
        if (e instanceof assert.AssertionError) {
          console.log(e);
        } else {
          throw e;
        }
      }
    });
  }
}

new MoneyTest().runAllTests();
