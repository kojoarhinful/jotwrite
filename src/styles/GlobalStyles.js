import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle` // Correct export name
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400&display=swap');

  body {
    background-color: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }
`;
