import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputWork } from '../store/modules/checkwork';
import { showBlock, showCalendar } from '../store/modules/switchview';

export default function Footer() {
const dispatch = useDispatch();
const viewMode = useSelector((state) => state.switchView);

  return (
    <footer className="footer" onClick={() => {
          viewMode === '캘린더 보기' ? dispatch(showBlock()) : dispatch(showCalendar());
        }}>{viewMode}
    </footer>
  );
}
