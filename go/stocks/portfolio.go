package stocks

type Portfolio []Money

func (p Portfolio) Add(money Money) Portfolio {
	p = append(p, money)
	return p
}

func convert(money Money, currency string) float64 {
	eurToUsd := map[string]float64{
		"EUR->USD": 1.2,
		"USD->KRW": 1100,
	}
	if money.currency == currency {
		return money.amount
	}
	key := money.currency + "->" + currency
	return money.amount * eurToUsd[key]
}

func (p Portfolio) Evaluate(currency string) Money {
	total := 0.0
	for _, m := range p {
		total = total + convert(m, currency)
	}
	return Money{amount: total, currency: currency}
}
