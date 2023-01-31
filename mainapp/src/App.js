import './App.css';
import Main from './Components/Main';
import WorkInfo from './Components/WorkInfo';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';
import WorkDatePick from './Components/WorkDatePick';

function App() {
  const [mode, setMode] = useState('캘린더 보기');

  return (
    <div className="App">
      {/* <Header /> */}
      <Main className="contents" />
      <WorkDatePick />
    </div>
  );
}

export default App;
