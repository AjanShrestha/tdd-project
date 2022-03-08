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
