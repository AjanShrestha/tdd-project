from __future__ import annotations
import functools
import operator

from money import Money


class Portfolio:
    def __init__(self) -> None:
        self.moneys = []
        self._eur_to_usd = 1.2

    def add(self, *moneys):
        self.moneys.extend(moneys)

    def __convert(self, a_money: type[Money], a_currency: str) -> type[Money]:
        if a_money.currency == a_currency:
            return a_money.amount
        return a_money.amount * self._eur_to_usd

    def evaluate(self, currency: str) -> type[Money]:
        total = functools.reduce(
            operator.add, map(lambda m: self.__convert(m, currency), self.moneys), 0
        )
        return Money(total, currency)
