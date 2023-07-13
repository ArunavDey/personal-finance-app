FROM node:latest
WORKDIR /view
COPY package.json .
RUN yarn install
COPY . .

EXPOSE 3000
CMD ["yarn", "run", "start"]
