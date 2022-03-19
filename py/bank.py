from __future__ import annotations
from locale import currency

from money import Money


class Bank:
    def __init__(self) -> None:
        self.exchange_rates = {}

    def add_exchange_rate(self, currency_from: str, currency_to: str, rate: float):
        key = f"{currency_from}->{currency_to}"
        self.exchange_rates[key] = rate

    def convert(self, a_money: type[Money], a_currency: str) -> type[Money]:
        if a_money.currency == a_currency:
            return Money(a_money.amount, a_money.currency)

        key = f"{a_money.currency}->{a_currency}"
        if key in self.exchange_rates:
            return Money(a_money.amount * self.exchange_rates[key], a_currency)
        raise Exception(key)
