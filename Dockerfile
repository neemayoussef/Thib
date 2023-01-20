FROM node:19.4.0
WORKDIR /usr/app

COPY . .

ENV PORT=8080
ENV HOST=0.0.0.0
RUN npm install -g nodemon
RUN npm install --quiet
EXPOSE 8080
ENTRYPOINT ["nodemon","backend/index.mjs"]