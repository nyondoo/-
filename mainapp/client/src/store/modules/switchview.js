import WorkInfo from '../../Components/WorkInfo';
import axios from 'axios';

//초기 state
let viewMode = '캘린더 보기';

//action type 정의하기
const BLOCK = 'switchview/BLOCK';
const CALENDAR = 'switchview/CALENDAR';
const SUBMIT = 'switchview/SUBMIT';
const ADDWORK = 'switchview/ADDWORK';

//action 생성 함수
export function showBlock(payload) {
  return {
    type: BLOCK,
    payload,
  };
}

export function showCalendar(payload) {
  return {
    type: CALENDAR,
    payload,
  };
}

export function showSubmit(payload) {
  return {
    type: SUBMIT,
    payload,
  };
}

export function showAddWork(payload) {
  return {
    type: ADDWORK,
    payload,
  };
}

//Reducer 설정
export default function switchView(state = viewMode, action) {
  switch (action.type) {
    case BLOCK:
      return '목록 보기';
    case CALENDAR:
      return '캘린더 보기';
    case SUBMIT:
      return '입력 완료';
    case ADDWORK:
      return '근무일 추가하기';
    default:
      return state;
  }
}
