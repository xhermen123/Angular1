FROM node:12.8.0
RUN mkdir /app
WORKDIR /app
ADD . /app/
WORKDIR /app
RUN rm -f package-lock.json
RUN rm -rf node_modules
