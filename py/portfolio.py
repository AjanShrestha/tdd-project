from __future__ import annotations
import functools
import operator

from bank import Bank
from money import Money


class Portfolio:
    def __init__(self) -> None:
        self.moneys = []

    def add(self, *moneys):
        self.moneys.extend(moneys)

    def evaluate(self, bank: type[Bank], currency: str):
        total = 0.0
        failures = []
        for m in self.moneys:
            try:
                total += bank.convert(m, currency).amount
            except Exception as ex:
                failures.append(ex)

        if not len(failures):
            return Money(total, currency)

        failure_message = ",".join(f.args[0] for f in failures)
        raise Exception("Missing exchange rate(s):[{0}]".format(failure_message))
