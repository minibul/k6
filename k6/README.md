k6 run -e BASE_URL={URL} registration-test.js --duration 1s --vus 1

-------------------------------------------

docker-compose run --rm --name k6-test k6 run -e BASE_URL={URL} /script.js --duration 1s --vus 10

-------------------------------------------

k6 run -e BASE_URL={URL} registration-test.js --duration 1s --vus 1 > log.txt 2>&1с

Select-String -Path "log.txt" -Pattern 'Email: ([^,]+), Password: ([^\s]+)' | ForEach-Object {
    $_.Matches.Groups[1].Value + ", " + $_.Matches.Groups[2].Value
} > "credentials.txt"

-------------------------------------------