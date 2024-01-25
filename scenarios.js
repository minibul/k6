import { check, sleep } from "k6";
import http from "k6/http";
import exec from 'k6/execution';

// export default function () {
//     const res = http.get('https://test.k6.io');
//     console.log(res.status);
// }

// export default function () {
//     const res = http.get('https://test.k6.io/');
//     check(true, {
//         'true is true': (value) => value === true
//     });
// }

export const options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<1000'],
        http_req_duration: ['max<2000'],
        http_req_failed: ['rate<0.01'],
        http_reqs: ['count>20'],
        http_reqs: ['rate>2'],
        vus: ['value<=10'],
        checks: ['rate>=0.98']
    }
}

export default function () {
    const res = http.get('https://test.k6.io/');
    console.log(exec.scenario.iterationInTest);

    check(res, {
        'status is 200': (r) => r.status === 200,
        'page is storage': (r) => r.body.includes('Collection of simple web-pages')
    });
    sleep(2);
}