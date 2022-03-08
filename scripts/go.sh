#! /bin/bash
cd go
nodemon --ext go --exec "go test -v || exit 1"
