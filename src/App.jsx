import { Container } from './styles';
import { useState, useEffect } from 'react';
import Firework from './scripts';
import { HideText }from './scripts';

export function App() {
  const [firework, setFirework] = useState();
  useEffect(Firework, [firework]);

  window.addEventListener('click', HideText);
  
  return (
    <Container onChange={e => setFirework(e.target.value)} />
  )
}

