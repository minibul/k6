k6 run -e BASE_URL=staging.tonywin.ae script.js --duration 1s --vus 1





docker-compose run -e BASE_URL=https://staging.tonywin.ae env-var.js

docker-compose run --rm --name k6-test k6 run -e BASE_URL=staging.tonywin.ae /script.js --duration 1s --vus 10

docker-compose run --rm --name k6-test k6 run -e BASE_URL=staging.tonywin.ae /script.js --duration 1s --vus 10