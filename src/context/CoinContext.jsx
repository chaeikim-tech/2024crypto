import React, { createContext, useEffect, useState } from 'react'

export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "krw",
        symbol: "₩"
    });


    const fetchCoins = async () => {
        return await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc`)
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchCoins();
    }, [currency]);

    const contextValue = {
        allCoin, currency, setCurrency
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {children}
        </CoinContext.Provider>
    )
};

export default CoinContextProvider;
