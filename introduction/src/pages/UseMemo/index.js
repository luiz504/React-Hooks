import React, { useState, useEffect, useMemo } from 'react';

import { Container, Header } from '../../components/container';
import { PageContainer } from './styles';

export default function UseMemo() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  /** componentDidMount - Bring the value to be render the first time */
  useEffect(() => {
    const storageTech = localStorage.getItem('techs');

    if (storageTech) {
      setTechs(JSON.parse(storageTech));
    }
    /* return () =>{
      document.removeEventListener()
    } to create a componentWillUnmount, and render again the data */
  }, []); // this function will be executed only one time []***.

  /*  Previously to update the values inside the state 'techs' the lifecycle
  componentDidUpdate was used to compare the old value with the new and update
  it in 'localstore' for example. */
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  function handleDelete(tech) {
    setTechs(techs.filter(u => u !== tech));
  }

  const techSize = useMemo(() => techs.length, [techs]);
  return (
    <Container>
      <Header>
        <h1> useMemo()</h1>
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
