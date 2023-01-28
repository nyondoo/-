import './App.css';
import Main from './Components/Main';
import WorkInfo from './Components/WorkInfo';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

function App() {
    const [input, setInput] = useState(false);

  return (
    <div className="App">
      <Main />

    </div>
  );
}

export default App;
