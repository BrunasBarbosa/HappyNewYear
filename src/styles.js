import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000;

    --webkit-font-smoothing: antialiased;
    font-family: 'Passions Conflict', cursive;
  }

  #root {
    display: flex;
  }
`;

export const Container = styled.canvas`
  height: 100vh;
  position: relative;
  z-index: -1;
`;

export const Text = styled.main`
  text-align: center;
  top: 50%;
  margin: 0 auto;
  position: absolute;
  width: 100%;
  height: 3.2rem;

  h1 {
    font-weight: 500;
    font-size: 4.8rem;
    color: white;
  }

  p {
    margin-top: 2.4rem;
    font-size:2.4rem;
    color: #4C5254;
  }

  .hide {
    display: none;
  }
`;
