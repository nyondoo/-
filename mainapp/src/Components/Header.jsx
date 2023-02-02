import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Block from './Block';
import Calandertab from './Calandertab';
import WorkInfo from './WorkInfo';
import AddWorkDay from './AddWorkDay';


export default function Header() {
  return (
    <>
      <header className="header">
        <img src='img/Home-icon.png' alt='홈 로고' className='logo' />
        <div className='title'>출근도장</div>
      </header>

    {/* <Routes>
      <Route path='/mainBlock' element={<Block />} /> 
      <Route path='/mainCalander' element={<Calandertab />} />
      <Route path='/addWorkDay' element={<AddWorkDay />} /> 
      <Route path='/addWork' element={<WorkInfo />} />
    </Routes> */}
    </>

  );
}
