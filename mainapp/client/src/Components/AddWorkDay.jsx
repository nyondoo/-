import React, { useState } from 'react'
import DatePicker from 'react-multi-date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { showCalendar } from '../store/modules/switchview';

export default function AddWorkDay() {
    const [values, setValues] = useState([]);
    const dispatch = useDispatch();
    const viewMode = useSelector((state) => state.switchView);

  return (
    <>
        <DatePicker 
            multiple 
            value={values} 
            onChange={setValues}
            withPortal
         />

        <footer className='footer'
            onClick={() => {
                alert('근무일 입력 완료!')
                dispatch(showCalendar());
            }}
        >
            {viewMode}
        </footer>
    </>
  )
}
