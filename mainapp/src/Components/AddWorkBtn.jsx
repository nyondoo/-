import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showSubmit } from '../store/modules/switchview';

export default function AddWorkBtn() {
    const dispatch = useDispatch();
    const viewMode = useSelector((state) => state.switchView);
  return (
    <>
        <div 
        className="AddWorkBtn"
        onClick={() => {
            dispatch(showSubmit())
        }}
        >+<br />근무지 추가</div>
    </>
  )
}
