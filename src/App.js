import React from 'react';
import Logo from './images/rick_and_morty_logo.png';

import './styles/components/App.scss';

function App() {
  return (
    <div className="task-list__header">
      <img src={Logo} alt="" />
        Rick i Morty fetch API
    </div>
  );
}

export default App;
