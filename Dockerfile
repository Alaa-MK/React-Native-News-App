FROM node:latest

WORKDIR /MyApp

COPY . /MyApp

EXPOSE 5037
EXPOSE 19000
EXPOSE 19001

ENV ADB_IP="192.168.1.2"

RUN apt-get update
RUN apt-get install android-tools-adb -y
RUN yarn global add react-native-cli
RUN yarn install

CMD react-native run-android