import React from 'react'
import styled from 'styled-components';
import { Link, useParams, useLocation } from 'react-router-dom';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  display:flex;
  align-items: center;
  font-size: 48px;
  margin-left: -55px;
  color: #ffffff;
  img{
      width:45px;
      height: 45px;
      margin-right: 10px;
      border-radius: 50%;
    }
`;

const BackButton = styled.button`
  text-align: center;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  svg{
    width: 1.5rem;
    height: 1.5rem;
    color: black;
    padding: 4px 8px;
  }
`;

const CoinInfo = styled.div`
  width: 100%;
  height: 260px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
  color: white;
  
`;

const CoinPrice = styled.div`
  width:100%;
  height:15vh;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`

function Coin() {
  const { coinId } = useParams();
  const location = useLocation();
  console.log(location);

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
        <Title>
          <img src={location.state.coinImg} alt={coinId} />
          {coinId.toUpperCase()}</Title>
      </Header>
      <CoinInfo>
        <CoinPrice>
          <div>시가총액</div>
          <div>Rank</div>
          <div>현재가</div>
          <div>₩{Number(location.state.marketCap).toLocaleString('ko-KR')}</div>
          <div>{location.state.marketRank}</div>
          <div>₩{Number(location.state.currentPrice).toLocaleString('ko-KR')}</div>
        </CoinPrice>
      </CoinInfo>

    </Container>
  )
}

export default Coin;
