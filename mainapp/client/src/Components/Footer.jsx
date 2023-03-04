import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { inputWork } from '../store/modules/checkwork';
import { showBlock, showCalendar } from '../store/modules/switchview';

export default function Footer() {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.switchView);
  const [style, setStyle] = useState({ display: 'block' });

  return (
    <footer
      style={style}
      className="footer"
      onClick={() => {
        if (viewMode === '캘린더 보기') {
          dispatch(showBlock());
          setStyle({ display: 'block' });
        } else if (viewMode === '목록 보기') {
          dispatch(showCalendar());
          setStyle({ display: 'block' });
        } else setStyle({ display: 'block' });
      }}
    >
      {viewMode}
    </footer>
  );
}
