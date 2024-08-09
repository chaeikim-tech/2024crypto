import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CoinContext } from '../context/CoinContext';


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10%;
    color: #ddd;
    border-bottom: 2px solid #3c3c3c;
    ul{
        display: flex;
        gap: 40px;
        list-style: none;
        li{
            cursor: pointer;
        }
    }
`;

const Logo = styled.h1`
    color: #4A4E69;
    font-size: max(2.5vw, 25px);
    font-weight: 600;
`;

const Money = styled.div`
    display: flex;
    align-items: center;
    gap: max(1vw, 12px);
    select{
        padding: 5px 8px;
        border-radius: 6px;
        border: 2px solid white;
        background: transparent;
        color:white;
    }
    option{
        background-color: #4c4c78;
        color: white;
    }
`;

const NavBar = () => {
    const { setCurrency } = useContext(CoinContext);

    const currencyHandler = (e) => {
        switch (e.target.value) {
            case "krw": {
                setCurrency({ name: "krw", symbol: "₩" });
                console.log("krw")
                break;
            }
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" });
                console.log("usd")
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", symbol: "€" });
                console.log("eur")
                break;
            }
            default: {
                setCurrency({ name: "krw", symbol: "₩" });
                break;
            }
        }
    };


    return (
        <Wrapper>
            <Link to="/">
                <Logo>Crypto</Logo>
            </Link>
            <ul>
                <li>Home</li>
                <li>Price</li>
                <li>Blog</li>
                <li>Q&A</li>
            </ul>
            <Money>
                <select className='currency' onChange={currencyHandler} >
                    <option value="krw">KRW</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                </select>
            </Money>
        </Wrapper>
    )
}

export default NavBar;