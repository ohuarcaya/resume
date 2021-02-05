#!/bin/bash

ng build --prod --base-href="https://ohuarcaya.github.io/resume/" --output-path="./docs"
git add ./docs
git commit -m 'update docs'
git push
