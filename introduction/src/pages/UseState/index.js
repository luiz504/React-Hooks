import React, { useState } from 'react';

import { Container, Header } from '../../components/container';
import { PageContainer } from './styles';

export default function UseState() {
  const [techs, setTechs] = useState(['React', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]); // take all data from techs state and add the NewTech data into it
    setNewTech(''); // clean the input field after submit.
  }

  return (
    <Container>
      <Header>
        <h1> useState()</h1>
      </Header>
      <PageContainer>
        <ul>
          {techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="insert">
          <input
            value={newTech} // use the value attribute to define witch state this property will work.
            type="text"
            placeholder="Techs"
            onChange={event => setNewTech(event.target.value)} // set the date into the setted value state.
          />
          <button type="button" onClick={handleAdd}>
            ADD
          </button>
        </div>
      </PageContainer>
    </Container>
  );
}
