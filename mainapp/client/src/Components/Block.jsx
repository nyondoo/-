import React, { Fragment, useRef } from 'react';
import { useEffect, useState } from 'react';
import AddWorkBtn from './AddWorkBtn';
import { useDispatch, useSelector } from 'react-redux';
import { showBlock } from '../store/modules/switchview';
import axios from 'axios';
import { currentWork } from '../store/modules/checkwork';
import DatePicker from 'react-multi-date-picker';

export default function Block() {
  const dispatch = useDispatch();
  const currentWorks = useSelector((state) => state.checkWork.list);
  const viewMode = useSelector((state) => state.switchView);
  const [values, setValues] = useState([]);
  const datePickerRef = useRef();

  async function getData() {
    const resAllWorks = await axios.get(`${process.env.REACT_APP_HOST}/`);
    const data = await resAllWorks.data;
    console.log('근무지 조회 : ', data);
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

  const deleteWork = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      axios({
        url: `${process.env.REACT_APP_HOST}/deleteWork`,
        method: 'delete',
        data: {id},
      }).then((res) => {
        console.log(res.data);
        if( res.data != false ) {
          alert("근무지 삭제를 완료했습니다.");
          getData();
        } else {alert("근무지 삭제 오류");}
      });
    } else {
      return false;
    }
  }

  return (
    <>
      {currentWorks.length > 0 && currentWorks.map((el) => (
        <Fragment key={el.id}>
          <div className="workBlock">
            <div className="blockTop">
              <div className="workName">{el.name}</div>
              <img
                id="trashIcon"
                src="/img/trash.png"
                alt="img"
                onClick={() => { deleteWork(el.id) }}
              />
            </div>
            <div className="wage">₩{el.wage.toLocaleString()}</div>
            <div className="blockbtn">
              <button
                className="btns"
                onClick={() => {
                  axios({
                    url: `${process.env.REACT_APP_HOST}/attend`,
                    method: 'post',
                    data: {
                      name: el.name,
                      workdays: today,
                    },
                  }).then((res) => {
                    console.log(res);
                    if (res.data.msg === true) {
                      alert('출근 완료!');
                    } else {
                      alert('이미 출근처리 되었습니다.');
                    }
                    getData();
                  });
                }}
              >
                출근
              </button>
              <DatePicker
                className="green"
                ref={datePickerRef}
                multiple
                value={values}
                onChange={setValues}
                render={(value, openCalendar) => {
                  return (
                    <button className="btns" onClick={openCalendar}>
                      직접 입력
                    </button>
                  );
                }}
              >
                <button
                  onClick={() => {
                    const workedDays = [];
                    values.map((el) => {
                      const day = `0${el.day}`.slice(-2);
                      const month = `0${el.month.number}`.slice(-2);
                      workedDays.push(`${day}-${month}-${el.year}`);
                    });
                    axios({
                      url: `${process.env.REACT_APP_HOST}/addWorkDays`,
                      method: 'post',
                      data: {
                        name: el.name,
                        workdays: workedDays,
                      },
                    }).then(() => {
                      datePickerRef.current.closeCalendar();
                      getData();
                    });
                  }}
                >
                  추가
                </button>
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
