import { sleep } from "k6";
import http from "k6/http";
import { Counter, Trend } from 'k6/metrics';

export const options = {
    vus: 5,
    duration: '5s',
    thresholds: {
        http_req_duration: ['p(95)<2000'],
        my_counter: ['count>10'],
        response_ime_news_page: ['p(95)<150', 'p(99)<200'],
    }
}

let myCounter = new Counter('my_counter');
let newsPageResponseTrend = new Trend('response_ime_news_page');

export default function () {
    let res = http.get('https://test.k6.io/');
    myCounter.add(1);
    sleep(1);

    res = http.get('https://test.k6.io/news.php/')
    newsPageResponseTrend.add(res.timings.duration);
    sleep(1);

}