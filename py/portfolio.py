from __future__ import annotations
import functools
import operator

from money import Money


class Portfolio:
    def __init__(self) -> None:
        self.moneys = []

    def add(self, *moneys):
        self.moneys.extend(moneys)

    def __convert(self, a_money: type[Money], a_currency: str) -> type[Money]:
        exchange_rates = {
            "EUR->USD": 1.2,
            "USD->KRW": 1100,
        }
        if a_money.currency == a_currency:
            return a_money.amount
        key = f"{a_money.currency}->{a_currency}"
        return a_money.amount * exchange_rates.get(key)

    def evaluate(self, currency: str) -> type[Money]:
        total = functools.reduce(
            operator.add, map(lambda m: self.__convert(m, currency), self.moneys), 0
        )
        return Money(total, currency)
