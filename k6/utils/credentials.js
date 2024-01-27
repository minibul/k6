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

export function generateCredentials() {
  return {
    acceptPolicy: true,
    btag: null,
    clickId: null,
    country: "AE",
    ctag: null,
    currency: "AED",
    dob: "2001-03-03",
    gender: 1,
    langIso: "en",
    prefix: "971",
    recaptcha: "qa-pass",
    name: "test_" + Date.now(),
    surname: "test_" + Date.now(),
    password: "secret_" + Date.now(),
    email: generateRandomEmail(),
    phone: generateRandomPhoneNumber(),
  };
}

export function generatePayload(credentials) {
  return JSON.stringify({
    acceptPolicy: credentials.acceptPolicy,
    btag: credentials.btag,
    clickId: credentials.clickId,
    country: credentials.country,
    ctag: credentials.ctag,
    currency: credentials.currency,
    dob: credentials.dob,
    email: credentials.email,
    gender: credentials.gender,
    langIso: credentials.langIso,
    name: credentials.name,
    password: credentials.password,
    phone: credentials.phone,
    prefix: credentials.prefix,
    surname: credentials.surname,
    recaptcha: credentials.recaptcha,
  });
}
