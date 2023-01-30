import React, { useRef } from 'react';
import { useState } from 'react';
import Block from './Block';
import Calandertab from './Calandertab';
import axios from 'axios';
import { useEffect } from 'react';
import WorkInfo from './WorkInfo';
import { useDispatch, useSelector } from 'react-redux';
import { showSubmit } from '../store/modules/switchview';
import Calander from './Calandertab';

export default function Main() {
  const [dataArr, setDataArr] = useState([]);
  const viewMode = useSelector((state) => state.switchView);
  const dispatch = useDispatch();

  return (
    <>
      {
      viewMode === '캘린더 보기' ? <Block /> :
      viewMode === '목록 보기' ? <Calander /> :
      <WorkInfo />
    }
    </>
  );
}
