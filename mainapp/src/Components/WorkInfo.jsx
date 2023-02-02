import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showCalendar } from '../store/modules/switchview';
import DatePicker from 'react-multi-date-picker';

export default function WorkInfo() {
  const worklist = useSelector((state) => state.checkWork.list);
  const worknameRef = useRef();
  const paydayRef = useRef();
  const worktimeRef = useRef();
  const payRef = useRef();
  const benefitRef = useRef();
  const taxRef = useRef();
  const viewMode = useSelector((state) => state.switchView);
  const dispatch = useDispatch();
  const [values, setValues] = useState([]);
  const workedDays = [];

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  return (
    <>
      <form>
        <div>
          근무지명
          <input
            type="text"
            name="workname"
            pattern="^([a-zA-Z가-힣])$"
            ref={worknameRef}
          />
        </div>
        <div>
          월급일 매월
          <select ref={paydayRef}>
            {days.map((el, i) => (
              <option key={i} value={el}>
                {String(el)}
              </option>
            ))}
          </select>
          일
        </div>
        <div>
          근무시간
          <input type="text" ref={worktimeRef} />
          <input type="checkbox" name="minwage" />
        </div>
        <div>
          시급 금액
          <input type="number" ref={payRef} />
          <input type="checkbox" name="minwage" />
        </div>
        <div>
          주휴수당
          <select ref={benefitRef}>
            <option value="n">미포함</option>
            <option value="y">포함</option>
          </select>
        </div>
        <div>
          세금
          <select ref={taxRef}>
            <option value="1">미적용</option>
            <option value="2">3.3%</option>
            <option value="3">4대보험(9.219%)</option>
          </select>
        </div>
        <div>
          근무한 날
          <DatePicker multiple value={values} onChange={setValues} />
        </div>
      </form>
      <footer
        className="footer"
        onClick={() => {
          values.map((el) => {
            const day = `0${el.day}`.slice(-2);
            const month = `0${el.month.number}`.slice(-2);
            workedDays.push(
              `${day}-${month}-${el.year}`
            );
          });
          axios({
            method: 'post',
            url: 'http://localhost:8080/workInfo',
            data: {
              id: worklist.length,
              name: worknameRef.current.value,
              workdays: workedDays,
              payday: paydayRef.current.value,
              worktime: worktimeRef.current.value,
              pay: payRef.current.value,
              benefit: benefitRef.current.value,
              tax: taxRef.current.value,
            },
          }).then((res) => {
            alert('근무지 등록이 완료되었습니다.');
            dispatch(showCalendar());
          });
        }}
      >
        {viewMode}
      </footer>
    </>
  );
}
