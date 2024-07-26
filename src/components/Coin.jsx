import React from 'react'
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-left: -55px;
  color: white;
`;

const BackButton = styled.button`
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
  svg{
    width: 1.5rem;
    height: 1.5rem;
    color: black;
    padding: 4px 8px;

  }
`;


function Coin() {
    const { coinId } = useParams();

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
                <Title>{coinId}</Title>
            </Header>

        </Container>
    )
}

export default Coin;
