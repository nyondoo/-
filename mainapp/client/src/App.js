import './App.css';
import Main from './Components/Main';
import WorkInfo from './Components/WorkInfo';
import { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NaverLogin from './Components/NaverLogin';
import Block from './Components/Block';
import Calandertab from './Components/Calandertab';
import AddWorkDay from './Components/AddWorkDay';

function App() {
  const [mode, setMode] = useState('캘린더 보기');

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
