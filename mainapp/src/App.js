import './App.css';
import Main from './Components/Main';
import WorkInfo from './Components/WorkInfo';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Components/Header';

function App() {
  const [input, setInput] = useState(false);

  return (
    <div className="App">
      <Header />
      <Main className="contents" />
    </div>
  );
}

export default App;
