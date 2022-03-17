# tdd-project

This is a monorepo containing all the source code for the ["Learning Test-Driven Development"](https://learning.oreilly.com/library/view/learning-test-driven-development/9781098106461/) book, published by O'Reilly.

## Prerequisites

You need to install the runtime environments for [Go](https://golang.org/), [Node.js](https://nodejs.org/en/), and [Python 3](https://www.python.org/) to run the code in this repo.

Beyond these, you may need other tools -- e.g. ["act"](https://github.com/nektos/act) to run the GitHub actions locally, [gocyclo](https://github.com/fzipp/gocyclo) to check cyclomatic complexity of Go, [jshint](https://jshint.com/) to do static analysis of JavaScript code, and [flake8](https://flake8.pycqa.org/) for static analysis of Python code.

## How to run tests

In brief, use the following commands to run the tests for each language.

### Go

```go
cd go
go test -v ./...
```

### Javascript

```node
node js/money.test.js
```

### Python

```python
python3 py/test_money.py
```

## Problem

| Stock   | Stock Exchange | Shares | Share price |
| ------- | -------------- | ------ | ----------- |
| AAPL    | NASDAQ         | 100    | 124 USD     |
| BMW     | DAX            | 400    | 74 EUR      |
| Samsung | KSE            | 300    | 68000 KRW   |

1. Do simple calculations on one currency.
2. Support currency conversion.

## Features/Tests/Behaviors

- ~~5 USD x 2 = 10 USD~~
- ~~10 EUR x 2 = 20 EUR~~
- ~~4000 KRW / 4 = 1000 KRW~~
- ~~5 USD + 10 USD = 15 USD~~
- ~~Separate test code from production code~~
- ~~Remove redundant tests~~
- ~~5 USD + 10 EUR = 17 USD~~
- ~~1 USD + 1100 KRW = 2200 KRW~~
- ~~Determine exchange rate based on the currencies involved(from -> to)~~
- ~~Improve error handling when exchange rates are specified~~
- Improve the implementation of exchange rates
- Allow exchange rates to be modified

## Learnings

1. If dependency is the problem, then duplication is the symptom.
