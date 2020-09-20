FROM node:14

WORKDIR /usr/src/app

COPY package.json .
COPY wait-for-it.sh .

RUN npm install

ADD . /usr/src/app

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]