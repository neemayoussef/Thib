# syntax=docker/dockerfile:1.4

FROM node:lts AS development

ENV CI=false
ENV PORT=3000

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm ci
COPY . /code

CMD [ "npm", "start" ]

FROM development AS builder

RUN npm run build

FROM development as dev-envs
RUN <<EOF
apt update
apt install -y --no-install-recommends git
EOF

## install Docker tools (cli, buildx, compose)
#COPY --from=gloursdocker/docker / /
#CMD [ "npm", "start" ]

#FROM nginx:1.13-alpine
#
#COPY --from=builder /code/build /usr/share/nginx/html
