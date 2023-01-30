import './App.css';
import Main from './Components/Main';
import WorkInfo from './Components/WorkInfo';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const [mode, setMode] = useState('캘린더 보기');

  return (
    <div className="App">
      {/* <Header /> */}
      <Main className="contents" />
      {/* <Footer className="footer" onClick={() => {
        mode === '캘린더 보기' ?
        setMode('목록 보기') :
        setMode('캘린더 보기')
      }} viewMode={mode}/> */}
      <Footer />
    </div>
  );
}

export default App;
