import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    overflow: hidden;
    background-color: #000;

    --webkit-font-smoothing: antialiased;

    font-family: 'Passions Conflict', cursive;
  }

  #root {
    display: flex;
  }
`;

export const Container = styled.div`
  overflow: none;
  position: relative;
  z-index: -1;
`;

export const Content = styled.canvas`
  width: 100%;
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
    animation: show 800ms 300ms backwards;
  }

  p {
    margin-top: 2.4rem;
    font-size:2.4rem;
    color: #4C5254;
    animation: show 800ms 600ms backwards;
  }

  .hide {
    display: none;
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
