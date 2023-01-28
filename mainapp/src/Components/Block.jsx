import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Block({ name, wage }) {
  return (
    <div className="workBlock">
      <span>{name}</span>
      <br />
      <span>₩{wage}</span>
      <br />
      <button>출근</button>
      <button>직접 입력</button>
    </div>
  );
}
