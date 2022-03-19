class Money {
  /**
   *
   * @param {number} amount
   * @param {string} currency
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   *
   * @param {number} multiplier
   * @returns {Money}
   */
  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  /**
   *
   * @param {number} divisor
   * @returns {Money}
   */
  divide(divisor) {
    return new Money(this.amount / divisor, this.currency);
  }
}

module.exports = Money;
