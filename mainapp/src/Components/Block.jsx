import React from 'react';
import { useEffect, useState } from 'react';
import AddWorkBtn from './AddWorkBtn';
import { useDispatch, useSelector } from 'react-redux';
import { showBlock } from '../store/modules/switchview';
import axios from 'axios';
import { currentWork } from '../store/modules/checkwork';


export default function Block() {
  //목록 메인화면
  //마운트 될 때마다 근무지 정보를 가져와야 함
  //useEffect(() => {}, []) 사용
  const dispatch = useDispatch();
  const currentWorks = useSelector((state) => state.checkWork.list);
  const viewMode = useSelector((state) => state.switchView);

  async function getData() {
    const resAllWorks = await axios.get('http://localhost:8080/');
    const data = await resAllWorks.data;
    dispatch(currentWork(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
  <>
    {
      currentWorks.map((el) => (
        <div className="workBlock" key={el.id}>
          <span>{el.name}</span>
          <br />
          <span>₩{el.wage}</span>
          <br />
          <button>출근</button>
          <button>직접 입력</button>
        </div>
      )
      )
    }
    <AddWorkBtn />
    <footer className='footer' onClick={() => {dispatch(showBlock())}}>{viewMode}</footer>
  </>

  );
}
