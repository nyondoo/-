import React, { useState } from 'react';
import { showBlock } from '../store/modules/switchview';

export default function Footer({ view }) {
  return (
    <footer className="footer">
      <div>{view}</div>
    </footer>
  );
}
