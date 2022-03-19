const Money = require('./money');

class Bank {
  constructor() {
    this.exchangeRates = new Map();
  }

  /**
   * Add mapping of currency
   * @param {string} currencyFrom
   * @param {string} currencyTo
   * @param {number} rate
   */
  addExchangeRate(currencyFrom, currencyTo, rate) {
    const key = currencyFrom + '->' + currencyTo;
    this.exchangeRates.set(key, rate);
  }

  /**
   * Convert money from one currency to another
   * @param {Money} money
   * @param {string} currency
   * @return {Money}
   */
  convert(money, currency) {
    if (money.currency === currency) {
      return new Money(money.amount, money.currency);
    }
    const key = money.currency + '->' + currency;
    const rate = this.exchangeRates.get(key);
    if (rate === undefined) {
      throw new Error(key);
    }
    return new Money(money.amount * rate, currency);
  }
}

module.exports = Bank;
