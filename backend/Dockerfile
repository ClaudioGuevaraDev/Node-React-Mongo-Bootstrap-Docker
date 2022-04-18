FROM node:16

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install 

COPY . .

RUN npm run build

ENV APP_PORT=4000
ENV DATABASE_HOST=database
ENV DATABASE_PORT=27017
ENV DATABASE_NAME=example

EXPOSE 4000

CMD ["npm", "start"]