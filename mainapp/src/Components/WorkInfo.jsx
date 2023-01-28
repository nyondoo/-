 import React, { useRef } from 'react'
 import { useDispatch, useSelector } from 'react-redux';
 import { inputWork, delwork } from '../store/modules/checkwork';
 
 export default function WorkInfo() {
    const list = useSelector((state) => state.checkwork.list);
    const worknameRef = useRef();
    const paydayRef = useRef();
    const worktimeRef = useRef();
    const payRef = useRef();
    const benefitRef = useRef();
    const taxRef = useRef();
    const dispatch = useDispatch();

    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
   return (
     <>
        <form>
            <div>
                근무지명
                <input type='text' name='workname' ref={worknameRef}/>
            </div>
            <div>
                월급일
                매월
                <select ref={paydayRef}>
                    {days.map((el, i) => (
                        <option key={i} value={el}>{String(el)}</option>
                    ))}
                </select>
                일
            </div>
            <div>
                근무시간
                <input type='text' ref={worktimeRef}/>
                <input type='checkbox' name='minwage' />
            </div>
            <div>
                시급 금액
                <input type='number' ref={payRef}/>
                <input type='checkbox' name='minwage' />
            </div>
            <div>
                주휴수당
                <span>미포함</span>
                <span>포함</span>
            </div>
            <div>
                세금
                <select ref={taxRef}>
                    <option value='no-tax'>미적용</option>
                    <option value=''>3.3%</option>
                    <option value=''>4대보험(9.219%)</option>
                </select>
            </div>
        </form>
        <div className='Bbtn' onClick={()=>{dispatch(inputWork({
            // id: list.length,
            // name: .name,
            // payday: .payday,
            // worktime: .worktime,
            // pay: .pay,
            // benefit: .benefit,
            // tax: .tax,
        }))}}>입력 완료</div>
        {/* 입력완료 버튼을 누르면 입력한 정보를 서버로 넘겨주기 */}
    </>
   )
 }
 