FROM node:18.18.2-slim

WORKDIR /app

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .