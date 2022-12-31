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
  font-size: 2.4rem;
  width: 100%;
  height: 3.2rem;
  color: white;

  p {
    margin-top: 2.4rem;
    font-size:1.4rem;
    color: gray;
  }

  .hide {
    display: none;
  }
`;
