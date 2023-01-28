import React from 'react'
import { useState } from 'react'
import Block from './Block'
import Calander from './Calander';
import axios from 'axios';
import { useEffect } from 'react';

export default function Main() {
    const [mode, setMode] = useState(false);
    const [dataArr, setDataArr] = useState([]);

    async function getData() {
        const resAxios = await axios.get('http://localhost:8080');
        const data = await resAxios.data;
        setDataArr(data);
        console.log(data);
        console.log(dataArr);
    }

    useEffect(() => {getData();}, [])

  return (
    <>
        {mode === false ? 
        <>
            {dataArr.map((el, i) => { 
                return (<Block key={i} name={el.name} wage={el.wage}/> ) 
            })}
            <div onClick={()=>{}}>+<br />근무지 추가하기</div> 
         </>
         :
        <Calander />}
        <br />
        <div className='Bbtn' onClick={()=>{setMode(!mode)}}>{mode === false ? '캘린더 보기' : '목록 보기'}</div>
    </>
  )
}
 