import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles';
import { Text } from './styles';
import { App } from './App';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <Text>
      Feliz ano novo!
      <p>Clique em qualquer lugar da tela.</p>
    </Text>
  </React.StrictMode>
)
