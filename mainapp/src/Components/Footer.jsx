import React, { useState } from 'react';
import { showBlock } from '../store/modules/switchview';

export default function Footer({ view }) {
  return (
    <footer className="footer">
      <div
        onClick={() => {
          if ({ view } === '입력 완료') {
          }
        }}
      >
        {view}
      </div>
    </footer>
  );
}
