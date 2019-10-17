import React from 'react';

import { Container } from '../../components/container';
import { PageNavigation } from './styles';

export default function Home() {
  return (
    <Container>
      <PageNavigation to="usestate">useState()</PageNavigation>
      <PageNavigation to="useeffect">useEffect()</PageNavigation>
      <PageNavigation to="usememo">useMemo()</PageNavigation>
      <PageNavigation to="usecallback">useCallback()</PageNavigation>
    </Container>
  );
}
