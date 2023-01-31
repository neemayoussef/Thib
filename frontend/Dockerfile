# syntax=docker/dockerfile:1.4

FROM node:lts AS development

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

WORKDIR /code

# default to port 80 for node, and 9229 and 9230 (tests) for debug
EXPOSE 8127

COPY package.json /code/package.json
# COPY package-lock.json /code/package-lock.json
RUN npm i


COPY . /code
