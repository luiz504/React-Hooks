import React, { useState, useEffect, useMemo, useCallback } from 'react';

import { Container, Header } from '../../components/container';
import { PageContainer } from './styles';

export default function UseCallback() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  // function handleAdd() {
  //   setTechs([...techs, newTech]);
  //   setNewTech('');
  // }

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  useEffect(() => {
    const storageTech = localStorage.getItem('techs');

    if (storageTech) {
      setTechs(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  // function handleDelete(tech) {
  //   setTechs(techs.filter(u => u !== tech));
  // }
  const handleDelete = useCallback(
    tech => {
      setTechs(techs.filter(t => t !== tech));
    },
    [techs]
  );

  const techSize = useMemo(() => techs.length, [techs]);
  return (
    <Container>
      <Header>
        <h1> useCallback()</h1>
      </Header>
      <PageContainer>
        <ul>
          {techs.map(tech => (
            <div className="list">
              <li key={tech}>{tech}</li>
              <button type="button" onClick={() => handleDelete(tech)}>
                X
              </button>
            </div>
          ))}
        </ul>
        <strong> You have {techSize} technologies</strong>
        <br />

        <div className="insert">
          <input
            value={newTech}
            type="text"
            placeholder="Techs"
            onChange={event => setNewTech(event.target.value)}
          />
          <button type="button" onClick={handleAdd}>
            ADD
          </button>
        </div>
      </PageContainer>
    </Container>
  );
}
