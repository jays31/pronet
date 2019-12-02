FROM node:12.9.1
RUN npm install sails -g
ENV NODE_ENV development
WORKDIR /Users/jay/Docker/pronet
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
EXPOSE 1337
CMD sails lift