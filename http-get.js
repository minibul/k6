import { check } from "k6";
import http from "k6/http";

export default function () {
    let res = http.get('https://test-api.k6.io/public/crocodiles/');
    const crocodiles = res.json();
    const crocodileName = crocodiles[0].name;
    const crocodileId = crocodiles[0].id;

    res = http.get(`https://test-api.k6.io/public/crocodiles/${crocodileId}/`);

    console.log(res.headers.Allow);

    check(res, {
        'status is 200': (r) => r.status === 200,
        'Crocodile name': (r) => r.json().name === crocodileName
    });
}