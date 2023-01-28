import React from 'react';
import { useState } from 'react';
import Block from './Block';
import Calandertab from './Calandertab';
import axios from 'axios';
import { useEffect } from 'react';
import Footer from './Footer';
import WorkInfo from './WorkInfo';

export default function Main() {
  const [mode, setMode] = useState('캘린더 보기');
  const [dataArr, setDataArr] = useState([]);

  async function getData() {
    const resAxios = await axios.get('http://localhost:8080');
    const data = await resAxios.data;
    setDataArr(data);
    console.log(data);
    console.log(dataArr);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {mode === '캘린더 보기' ? (
        <>
          {dataArr.map((el, i) => {
            return <Block key={i} name={el.name} wage={el.wage} />;
          })}
          <div
            onClick={() => {
              setMode('입력 완료');
            }}
          >
            +<br />
            근무지 추가하기
          </div>
        </>
      ) : mode === '목록 보기' ? (
        <Calandertab />
      ) : (
        <WorkInfo />
      )}
      <div
        className="Bbtn"
        onClick={() => {
          mode === '캘린더 보기'
            ? setMode('목록 보기')
            : setMode('캘린더 보기');
        }}
      >
        <Footer view={mode} />
      </div>
    </>
  );
}
