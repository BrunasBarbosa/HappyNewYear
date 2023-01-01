import { Container, Content, Text } from './styles';
import { useState, useEffect } from 'react';
import { HideText } from './scripts';
import Firework from './scripts';

export function App() {
  const [firework, setFirework] = useState();
  useEffect(Firework, [firework]);

  window.addEventListener('click', HideText);

  return (
    <Container>
      <Content onChange={e => setFirework(e.target.value)} />
      <Text>
        <h1>Feliz ano novo!</h1>
        <p>Clique em qualquer lugar da tela.</p>
      </Text>
    </Container>
  )
}

