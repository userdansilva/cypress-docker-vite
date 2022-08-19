# Cypress Docker with Vite
This repo shows how to run e2e tests with cypress. There is only one tests set here which visit the webserver "/" and check if there is a "data-testid" with "title", and it has "Vite + React".

## Attention
It will be necessary to configure [httpd docker image](https://hub.docker.com/_/httpd)  for visiting subpages like "/example" from your cypress, otherwise it will return 404.
 
## Running tests
```
docker-compose up --build
```