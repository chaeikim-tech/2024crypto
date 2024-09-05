import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link, useParams, useLocation } from 'react-router-dom';
import PriceChart from '../components/PriceChart';
import MarketData from '../components/MarketData';
import { CoinContext } from '../context/CoinContext';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.button`
  text-align: center;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
  svg{
    width: 1.5rem;
    height: 1.5rem;
    stroke-width: 3;
    color: white;
    padding: 4px 8px;
  }
`;

const Title = styled.h1`
  display:flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 38px;
  color: #ffffff;
  img{
      width:35px;
      height: 35px;
      margin-right: 10px;
      border-radius: 50%;
    }
`;


const CoinInfo = styled.div`
  width: 100%;
  height: 80vh;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
  color: white;
  p{
    font-size: 20px;
    margin: 5px 0;
  }
`;

const CoinInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`


const CoinPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
`


const ChangePrice = styled.span`
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
`

function Coin() {
  const { currency } = useContext(CoinContext);
  const { coinId } = useParams();
  const { state } = useLocation();
  const [color, setColor] = useState('blue');
  const [historicalData, setHistoricalData] = useState({});
  let percentageFont = state.priceChangePer;
  let priceChange = state.priceChange;
  const formattedPriceChangePer = parseFloat(percentageFont).toFixed(2);
  const formattedPrice = parseFloat(priceChange).toFixed(2);
  const updatedNum = state.updated;
  const formatterUpdate = updatedNum.split('T');

  const fetchCoinChart = async () => {
    return await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=7`)
      .then(res => res.json())
      .then(res => setHistoricalData(res))
      .catch(err => console.error('error:' + err));
  }


  useEffect(() => {
    if (Math.sign(percentageFont) === 1) {
      setColor('red');
    } else {
      setColor('blue');
    }
  }, [percentageFont]);

  useEffect(() => {
    fetchCoinChart(coinId, currency);
  }, [coinId, currency])


  return (
    <Container>
      <Header>
        <Link to="/">
          <BackButton type="button" onClick={() => console.log("back")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </BackButton>
        </Link>
      </Header>
      <CoinInfo>
        <CoinInfoHeader>
          <Title>
            <img src={state.coinImg} alt={coinId} />
            {coinId.toUpperCase()}
          </Title>
          <ChangePrice style={{ color }}>{formattedPriceChangePer.replace('-', '▼')}%</ChangePrice>
        </CoinInfoHeader>
        <CoinPrice>
          <p>현재가 : {currency.symbol} {Number(state.currentPrice).toLocaleString('ko-KR')} {(currency.name).toUpperCase()}</p>
          <ChangePrice style={{ color }}> {currency.symbol} {Number(formattedPrice).toLocaleString('ko-KR')}</ChangePrice>
        </CoinPrice>
        <PriceChart coinId={coinId} historicalData={historicalData} />
        <MarketData coin={{ marketCap: state.marketCap, marketRank: state.marketRank, currentPrice: state.currentPrice, formatterUpdate }} />
      </CoinInfo>
    </Container>
  )
}

export default Coin;
