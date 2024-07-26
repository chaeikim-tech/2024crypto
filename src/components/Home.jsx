import React from 'react';
import styled from 'styled-components';
import Coins from './Coins';



const Wrapper = styled.div`
    padding: 0px 10px;
    padding-bottom: 100px;
    .hero{
        max-width: 600px;
        margin: 80px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 30px;
        h1{
            font-size: max(4vw, 36px);
        }
        p{
            width: 75%;
            color: #e3e3e3;
            line-height: 1.5;
        }
        form{
            padding: 8px;
            width: 80%;
            background-color: white;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }
        input{
            flex: 1;
            font-size: 16px;
            outline: none;
            border: none;
            padding-left: 10px;
        }
        button{
            border: none;
            background: #7027ff;
            color: white;
            font-size: 16px;
            padding: 10px 30px;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`;

const CryptoList = styled.div`
    max-width: 800px;
    margin: auto;
    background: linear-gradient(rgba(84,3,255,0.15),rgba(105,2,153,0.15));
    border-radius: 15px;
    .table-layout{
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
    }
`;

function Home() {
    const apiKey = process.env.REACT_APP_API_KEY;

    return (
        <Wrapper>
            <div className='hero'>
                <h1>Largest <br /> Crypto Marketplace</h1>
                <p>Welcome to the world's largest cryptocurrency marketplace.
                    Sign up to explore more about cryptos.</p>
                <form>
                    <input type="text" placeholder='Search crypto...' />
                    <button type='submit'>Search</button>
                </form>
            </div>
            <CryptoList>
                <div className='table-layout'>
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p style={{ textAlign: "center" }}>HIGH 24HOUR</p>
                    <p style={{ textAlign: "right" }}>LOW 24HOUR</p>
                </div>
                <Coins />
            </CryptoList>
        </Wrapper>
    )
}

export default Home;