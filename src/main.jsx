import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles';
import { App } from './App';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
