import React from 'react'
import LangSelector from './components/LangSelector';
import App from './App';

function Lang() {
  return (
    <React.Fragment>
      <LangSelector />
      <div className="app">
        <App />
      </div>
    </React.Fragment>
  );
}

export default Lang;