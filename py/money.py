from __future__ import annotations


class Money:
    amount = 0
    currency = None

    def __init__(self, amount, currency) -> None:
        self.amount = amount
        self.currency = currency

    def __eq__(self, __o: type[Money]) -> bool:
        return self.amount == __o.amount and self.currency == __o.currency

    def __str__(self):
        return f"{self.currency} {self.amount:0.2f}"

    def times(self, multiplier) -> type[Money]:
        return Money(self.amount * multiplier, self.currency)

    def divide(self, divisor) -> type[Money]:
        return Money(self.amount / divisor, self.currency)
