import React, { useContext } from 'react';
import styled from 'styled-components';
import { CoinContext } from '../context/CoinContext';


const CoinPrice = styled.div`
  width:100%;
  height:10vh;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;


function MarketData({ coin }) {
  const { currency } = useContext(CoinContext);

  return (
    <>
      <CoinPrice>
        <div>시가총액</div>
        <div>Rank</div>
        <div>현재가</div>
        <div>{currency.symbol}{Number(coin.marketCap).toLocaleString('ko-KR')}</div>
        <div>{coin.marketRank}</div>
        <div>{currency.symbol}{Number(coin.currentPrice).toLocaleString('ko-KR')}</div>
      </CoinPrice>
      <div>Last Updated: {coin.formatterUpdate[0]}</div>
    </>
  )
}

export default MarketData;
