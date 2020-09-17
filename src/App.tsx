import React from 'react';
import './App.css';
import styled from 'styled-components';

interface Props {
  isText: boolean;
}

const Atest = styled.div`
  color: #f54722;
`;

const App: React.FC<Props> = () => {
  return (
    <div>
      <Atest>안농</Atest>
    </div>
  );
};

export default App;
