import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    justify-content: center;
    h1{
        font-size: 40px;
        font-weight: 600;
        color: red;
        padding: 100px;
    }
`

function PriceChart() {
    return (
        <Wrapper>
            <h1>
                Coin Chart
            </h1>
        </Wrapper>
    )
}

export default PriceChart
