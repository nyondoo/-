import React, { Fragment, useRef } from 'react';
import { useEffect, useState } from 'react';
import AddWorkBtn from './AddWorkBtn';
import { useDispatch, useSelector } from 'react-redux';
import { showBlock } from '../store/modules/switchview';
import axios from 'axios';
import { currentWork } from '../store/modules/checkwork';
import DatePicker from 'react-multi-date-picker';


export default function Block() {
  //목록 메인화면
  //마운트 될 때마다 근무지 정보를 가져와야 함
  //useEffect(() => {}, []) 사용
  const dispatch = useDispatch();
  const currentWorks = useSelector((state) => state.checkWork.list);
  const viewMode = useSelector((state) => state.switchView);
  const [values, setValues] = useState([]);
  const datePickerRef = useRef();

  async function getData() {
    const resAllWorks = await axios.get('http://localhost:8080/');
    const data = await resAllWorks.data;
    console.log('근무지 조회 : ', data)
    dispatch(currentWork(data));
  }

  useEffect(() => {
    getData();
  }, []);

  const todayRaw = new Date();
  let year = todayRaw.getFullYear();
  let month = ('0' + (todayRaw.getMonth() + 1)).slice(-2);
  let day = ('0' + todayRaw.getDate()).slice(-2);
  const today = `${day}-${month}-${year}`;

  return (
    <>
      {currentWorks.map((el) => (
      <Fragment key={el.id}>
        <div className="workBlock">
          <div className="workName">{el.name}</div>
          <div className="wage">₩{el.wage.toLocaleString()}</div>
          <div className="blockbtn" >
            <button className='btns'
            onClick={() => {
              axios({
                url: 'http://localhost:8080/attend',
                method: 'post',
                data: { 
                name: el.name,
                workdays: today 
                } 
              }).then((res) => {
                console.log(res)
                if(res.data.msg === true) {
                  alert('출근 완료!')
                } else { alert('이미 출근처리 되었습니다.') }
                getData();
              })
            }
            }
            >출근</button>
            <DatePicker
              className='green'
              ref={datePickerRef}
              multiple 
              value={values} 
              onChange={setValues}
              render={(value, openCalendar) => {
                return(<button className="btns" onClick={openCalendar}>직접 입력</button>)
              }}
            >
            <button
              onClick={() => {
                  const workedDays = [];
                  values.map((el) => {
                    const day = `0${el.day}`.slice(-2);
                    const month = `0${el.month.number}`.slice(-2);
                    workedDays.push(
                      `${day}-${month}-${el.year}`
                    );
                  });
                  axios({
                    url:'http://localhost:8080/addWorkDays',
                    method: 'post',
                    data: {
                      name: el.name,
                      workdays: workedDays
                    }
                  }).then(() => {
                    datePickerRef.current.closeCalendar()
                    getData();
                  })
              }}
            >추가</button>
            </DatePicker>
          </div>
        </div>
        <br></br>
      </Fragment>
      ))}
      <br />
      <AddWorkBtn />
      <footer
        className="footer"
        onClick={() => {
          dispatch(showBlock());
        }}
      >
        {viewMode}
      </footer>
    </>
  );
}
