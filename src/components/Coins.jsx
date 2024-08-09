import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { CoinContext } from '../context/CoinContext';


const TableLayout = styled(Link)`
        display: grid;
        grid-template-columns: 0.5fr 2fr 1fr 1fr 1.5fr;
        padding: 15px 20px;
        align-items: center;
        border-bottom: 1px solid #3c3c3c;
        div{
          display: flex;
          justify-content:flex-start;
          align-items: center;
        }
        img{
            width:30px;
            height: 30px;
            margin-right: 10px;
            border-radius: 50%;
        }
`


function Coins() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin])

  return (
    <>
      {displayCoin?.map((coin, index) => (
        <TableLayout key={coin.id} to={`/${coin.id}`} state={{ marketCap: `${coin.market_cap}`, marketRank: `${coin.market_cap_rank}`, currentPrice: `${coin.current_price}`, coinName: `${coin.name}`, coinImg: `${coin.image}`, priceChange: `${coin.price_change_24h}`, priceChangePer: `${coin.price_change_percentage_24h}`, updated: `${coin.last_updated}` }}>
          <p>{coin.market_cap_rank}</p>
          <div>
            <img src={coin.image} alt={coin.name} />
            {coin.name}
          </div>
          <p>{currency.symbol} {(coin.current_price).toLocaleString('ko-KR')}</p>
          <p style={{ textAlign: "center" }}>{currency.symbol} {(coin.high_24h).toLocaleString('ko-KR')}</p>
          <p style={{ textAlign: "right" }}>{currency.symbol} {(coin.low_24h).toLocaleString('ko-KR')}</p>
        </TableLayout>
      ))}
    </>
  )
}


export default Coins;