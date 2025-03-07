import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';

const TextContainer = styled.div`
  max-width: 800px;
  padding: 20px;
`;

const Name = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: 3.5rem;
  color: #ffffff;
  font-weight: 400;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.03em;
`;

const Title = styled.p`
  font-family: 'Fraunces', serif;
  font-size: 3.5rem;
  color: #6b7280;
  font-weight: 300;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <TextContainer>
        <Name>JotWrite.</Name>
        <Title>COMING SOON..!</Title>
      </TextContainer>
    </>
  );
}

export default App;
