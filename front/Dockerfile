#nodeイメージをpullする
FROM node:14.17.1-alpine

#working directory
WORKDIR /app

#vuecliインストール
#ここの記載は検討中、yarnのインストールコマンドは不要かも
RUN apk update && \
#    npm install && \
#    npm install -g yarn && \
    yarn global add @vue/cli
#   yarn add express
#   yarn add global express-generator ←expressコマンドは左記コマンドを入れないと動かない可能性あり(要確認)
