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
        img{
            width:30px;
            height: 30px;
            margin-right: 10px;
            border-radius: 50%;
        }
`


function Coins() {

  const { isLoading: isListLoading, data: listData } = useQuery("allCoins", fetchCoins);
  //const { isLoading: isImgLoading, data: imgData } = useQuery("coinImg", fetchCoinInfo(coinId));

  return (
    <>
      {isListLoading ? (
        <h1>Loading...</h1>
      ) : (
        listData?.slice(0, 100).map((coin) => (
          <TableLayout key={coin.id} to={`/${coin.id}`} state={coin.name}>
            <p>{coin.rank}</p>
            <p>{coin.name}</p>
            <p>{coin.symbol}</p>
            <p style={{ textAlign: "center" }}></p>
            <p style={{ textAlign: "right" }}></p>
          </TableLayout>
        ))
      )}
    </>
  )
}


export default Coins;