import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from 'react-query';
import { fetchCoins } from "../api";
import styled from 'styled-components';




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

  const { isLoading: isListLoading, data: listData } = useQuery("allCoins", fetchCoins);

  return (
    <>
      {isListLoading ? (
        <h1>Loading...</h1>
      ) : (
        listData?.map((coin) => (
          <TableLayout key={coin.id} to={`/${coin.id}`} state={{ marketCap: `${coin.market_cap}`, marketRank: `${coin.market_cap_rank}`, currentPrice: `${coin.current_price}`, coinName: `${coin.name}`, coinImg: `${coin.image}`, priceChange: `${coin.price_change_24h}`, priceChangePer: `${coin.price_change_percentage_24h}`, updated: `${coin.last_updated}` }}>
            <p>{coin.market_cap_rank}</p>
            <div>
              <img src={coin.image} alt={coin.name} />
              {coin.name}
            </div>
            <p>{coin.symbol.toUpperCase()}</p>
            <p style={{ textAlign: "center" }}>{(coin.high_24h).toLocaleString('ko-KR')}</p>
            <p style={{ textAlign: "right" }}>{(coin.low_24h).toLocaleString('ko-KR')}</p>
          </TableLayout>
        ))
      )}
    </>
  )
}


export default Coins;