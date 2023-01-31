# syntax=docker/dockerfile:1.4

# if you're doing anything beyond your local machine, please pin this to a specific version at https://hub.docker.com/_/node/
FROM node:lts AS development

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

WORKDIR /code

# default to port 80 for node, and 9229 and 9230 (tests) for debug
# ARG PORT=80809
# ENV PORT $PORT
# EXPOSE $PORT 8080 8081
EXPOSE 8080 8081

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm ci

# check every 30s to ensure this service returns HTTP 200
# HEALTHCHECK --interval=30s \
#   CMD node healthcheck.js

# copy in our source code last, as it changes the most
COPY . /code
