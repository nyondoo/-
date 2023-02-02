import React, { useState } from 'react';
import { showCalendar } from '../store/modules/switchview';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calander() {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.switchView);
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Calendar 
      onChange={onChange}
      value={value}
      />
      <footer
        className="footer"
        onClick={() => {
          dispatch(showCalendar());
        }}
      >
        {viewMode}
      </footer>
    </>
  );
}
