const Money = require('./money');

class Portfolio {
  constructor() {
    this.moneys = [];
  }

  /**
   * Add money to portfolio
   * @param  {...Money} moneys
   */
  add(...moneys) {
    this.moneys = this.moneys.concat(moneys);
  }

  /**
   * Evaluae the total availabe in portfolio in required Currency
   * @param {Bank} bank
   * @param {string} currency
   * @returns {Money}
   */
  evaluate(bank, currency) {
    let failures = [];
    const total = this.moneys.reduce((sum, money) => {
      try {
        const convertedMoney = bank.convert(money, currency);
        return sum + convertedMoney.amount;
      } catch (error) {
        failures.push(error.message);
        return sum;
      }
    }, 0);
    if (!failures.length) {
      return new Money(total, currency);
    }
    throw new Error(`Missing exchange rate(s):[${failures.join()}]`);
  }
}

module.exports = Portfolio;
