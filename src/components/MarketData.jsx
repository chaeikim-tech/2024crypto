import React from 'react';
import styled from 'styled-components';


const CoinPrice = styled.div`
  width:100%;
  height:15vh;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;


const ChangePrice = styled.span`
  padding: 15px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  background-color: white;
`


function MarketData({ coin }) {
    return (
        <>
            <CoinPrice>
                <div>시가총액</div>
                <div>Rank</div>
                <div>현재가</div>
                <div>₩{Number(coin.marketCap).toLocaleString('ko-KR')}</div>
                <div>{coin.marketRank}</div>
                <div>₩{Number(coin.currentPrice).toLocaleString('ko-KR')}</div>
            </CoinPrice>
            <div>Last Updated: {coin.formatterUpdate[0]}</div>
        </>
    )
}

export default MarketData;
