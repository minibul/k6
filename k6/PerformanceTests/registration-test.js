import http from "k6/http";
import { check } from "k6";
import { generateCredentials, generatePayload } from "../utils/credentials.js";

export default function () {
  const credentials = generateCredentials();
  const payload = generatePayload(credentials);

  console.log(`Generated credentials - Email: ${credentials.email}, Password: ${credentials.password}`);

  // console.log(`Sending request data: ${payload}`);

  let res = http.post(
    `https://${__ENV.BASE_URL}/api/v2/registration`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(`Response body: ${res.body}`);

  check(res, {
    "is status 200": (r) => r.status === 200,
  });
}
