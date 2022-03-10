from __future__ import annotations
import unittest


class Dollar:
    def __init__(self, amount) -> None:
        self.amount = amount

    def times(self, multiplier) -> type[Dollar]:
        return Dollar(self.amount * multiplier)


class Money:
    amount = 0
    currency = None

    def __init__(self, amount, currency) -> None:
        self.amount = amount
        self.currency = currency

    def __eq__(self, __o: type[Money]) -> bool:
        return self.amount == __o.amount and self.currency == __o.currency

    def times(self, multiplier) -> type[Money]:
        return Money(self.amount * multiplier, self.currency)

    def divide(self, divisor) -> type[Money]:
        return Money(self.amount / divisor, self.currency)


class TestMoney(unittest.TestCase):
    def testMultiplication(self):
        fiver = Dollar(5)
        tenner = fiver.times(2)
        self.assertEqual(10, tenner.amount)

    def testMultiplicationInDollars(self):
        five_dollars = Money(5, "USD")
        ten_dollars = Money(10, "USD")
        self.assertEqual(ten_dollars, five_dollars.times(2))

    def testMultiplicationInEuros(self):
        ten_euros = Money(10, "EUR")
        twenty_euros = Money(20, "EUR")
        self.assertEqual(twenty_euros, ten_euros.times(2))

    def testDivision(self):
        original_money = Money(4002, "KRW")
        actual_money_after_division = original_money.divide(4)
        expected_money_after_division = Money(1000.5, "KRW")
        self.assertEqual(actual_money_after_division, expected_money_after_division)


if __name__ == "__main__":
    unittest.main()
