from __future__ import annotations
import functools
import operator

from money import Money


class Portfolio:
    def __init__(self) -> None:
        self.moneys = []

    def add(self, *moneys):
        self.moneys.extend(moneys)

    def __convert(self, a_money: type[Money], a_currency: str) -> float:
        exchange_rates = {
            "EUR->USD": 1.2,
            "USD->KRW": 1100,
        }
        if a_money.currency == a_currency:
            return a_money.amount
        key = f"{a_money.currency}->{a_currency}"
        return a_money.amount * exchange_rates[key]

    def evaluate(self, currency: str):
        total = 0.0
        failures = []
        for m in self.moneys:
            try:
                total += self.__convert(m, currency)
            except KeyError as ke:
                failures.append(ke)

        if not len(failures):
            return Money(total, currency)

        failure_message = ",".join(f.args[0] for f in failures)
        raise Exception("Missing exchange rate(s):[{0}]".format(failure_message))
