import http from "k6/http";
import { check } from "k6";

export default function () {
  function generateRandomEmail() {
    const domain = "example.com";
    const username = `user${Math.floor(Math.random() * 10000)}`;
    return `${username}@${domain}`;
  }

  function generateRandomPhoneNumber() {
    let phoneNumber = "45"; 
    for (let i = 0; i < 6; i++) { 
      phoneNumber += Math.floor(Math.random() * 10); 
    }
    return phoneNumber;
  }

  const credentials = {
    name: "test_" + Date.now(),
    surname: "test_" + Date.now(),
    password: "secret_" + Date.now(),
    email: generateRandomEmail(),
    phone: generateRandomPhoneNumber(),
  };

  const payload = JSON.stringify({
    acceptPolicy: true,
    btag: null,
    clickId: null,
    country: "AE",
    ctag: null,
    currency: "AED",
    dob: "2001-03-03",
    email: credentials.email,
    gender: 1,
    langIso: "en",
    name: credentials.name,
    password: credentials.password,
    phone: credentials.phone,
    prefix: "971",
    surname: credentials.surname,
    recaptcha: "qa-pass",
  });

  console.log(`Sending request data: ${payload}`);

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
    'is status 200': (r) => r.status === 200,
  });
}
