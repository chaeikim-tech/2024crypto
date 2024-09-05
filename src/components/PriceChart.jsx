import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CoinContext } from '../context/CoinContext';
import { Chart } from "react-google-charts";


const Wrapper = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    justify-content: center;
    padding-bottom: 6rem;
    h1{
        font-size: 40px;
        font-weight: 600;
        color: red;
        padding: 100px;
    }
`

function PriceChart({ coinId, historicalData }) {
    const { currency } = useContext(CoinContext);
    const [data, setData] = useState(["Date", "Prices"]);



    const options = {
        title: `${coinId.toUpperCase()}`,
        curveType: "function",
        legend: { position: "bottom" },
        backgroundColor: 'transparent',
        hAxis: {
            textStyle: {
                color: '#ffffff'
            }
        },
        vAxis: {
            textStyle: {
                color: '#ffffff'
            }
        },
    };


    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];
        let dateOptions = { month: "numeric", day: "numeric" };
        if (historicalData && historicalData.prices) {
            historicalData.prices.map((item) => {
                dataCopy.push([`${new Date(item[0]).toLocaleDateString('ko-KR', dateOptions)}`, item[1]])
            })
            setData(dataCopy);
        }
    }, [historicalData])



    return (
        <Wrapper>
            <Chart
                chartType="LineChart"
                width="100%"
                height="300px"
                data={data}
                options={options}

            />
        </Wrapper>
    )
}

export default PriceChart
