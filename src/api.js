const BASE_URL = `https://api.coingecko.com/api/v3`;


export function fetchCoins() {
    return fetch(`${BASE_URL}/coins/markets?vs_currency=krw&order=market_cap_desc`)
        .then((response) => response.json());
}

export function fetchCoinInfo(coinId) {
    return fetch(`${BASE_URL}/coins/${coinId}`)
        .then((response) => response.json()
        );
}

export function fetchCoinChart(coinId, currency) {
    return fetch(`${BASE_URL}/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=7`)
        .then(res => res.json())
        .then(res => conosole.log(res))
        .catch(err => console.error('error:' + err));
}

export function fetchCoinTickers(coinId) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
        response.json()
    );
}