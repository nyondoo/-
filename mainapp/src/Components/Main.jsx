import React from 'react';
import Block from './Block';
import Calandertab from './Calandertab';
import WorkInfo from './WorkInfo';
import { useSelector } from 'react-redux';
import AddWorkDay from './AddWorkDay';
import { Route, Routes, Link } from 'react-router-dom';

export default function Main() {
  const viewMode = useSelector((state) => state.switchView);

  return (
    <>
      {
        viewMode === '캘린더 보기' ? <Block /> : 
        viewMode === '목록 보기' ? <Calandertab /> : 
        viewMode === '입력 완료' ?<WorkInfo /> :
        <AddWorkDay />
      }

      {/* {
      viewMode === '캘린더 보기' ? <Link to='/mainBlock' /> : 
      viewMode === '목록 보기' ? <Link to='/mainCalander' /> :
      viewMode === '입력 완료' ? <Link to='/addWork' /> : 
      <Link to='/addWorkDay' />
      }

      <Routes>
        <Route path='/mainBlock' element={<Block />} /> 
        <Route path='/mainCalander' element={<Calandertab />} />
        <Route path='/addWorkDay' element={<AddWorkDay />} /> 
        <Route path='/addWork' element={<WorkInfo />} />
      </Routes> */}
    </>
  );
}
