import React from 'react';
import Block from './Block';
import Calandertab from './Calandertab';
import WorkInfo from './WorkInfo';
import { useSelector } from 'react-redux';
import AddWorkDay from './AddWorkDay';
import { Route, Routes, Link } from 'react-router-dom';
import Footer from './Footer';

export default function Main() {
  const viewMode = useSelector((state) => state.switchView);

  return (
    <div className="contents">
      {viewMode === '캘린더 보기' ? (
        <Block />
      ) : viewMode === '목록 보기' ? (
        <Calandertab />
      ) : viewMode === '입력 완료' ? (
        <WorkInfo />
      ) : (
        <AddWorkDay />
      )}
    </div>
  );
}
