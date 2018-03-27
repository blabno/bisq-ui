FROM node:6.11.5

EXPOSE 8888
WORKDIR /bisq-ui
CMD yarn start

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build
