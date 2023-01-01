import { useState, useEffect } from 'react';
import { Container } from './styles';
import { HideText } from './scripts';
import Firework from './scripts';

export function App() {
  const [firework, setFirework] = useState();
  useEffect(Firework, [firework]);

  window.addEventListener('click', HideText);

  return (
    <Container onChange={e => setFirework(e.target.value)} />
  )
}

