#!/bin/sh

APP_ROOT=$HOME/Dropbox/workspace/aigaomoi-web

cd $APP_ROOT

yarn run webpack

$(aws ecr get-login --region ap-northeast-1)
docker build -t inoue-kobo.com/aigaomoi-web .
docker tag inoue-kobo.com/aigaomoi-web:latest 489378379658.dkr.ecr.ap-northeast-1.amazonaws.com/inoue-kobo.com/aigaomoi-web:latest
docker push 489378379658.dkr.ecr.ap-northeast-1.amazonaws.com/inoue-kobo.com/aigaomoi-web:latest