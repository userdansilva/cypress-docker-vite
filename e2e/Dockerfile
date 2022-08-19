FROM cypress/browsers:latest
WORKDIR /app

COPY package.json package-lock.json ./
COPY cypress.config.js ./
COPY cypress ./cypress

ENV CI=1
RUN npm ci

RUN npx cypress verify