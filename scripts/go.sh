#! /bin/bash
cd go
nodemon --ext go --exec "go test -v -shuffle on || exit 1"
