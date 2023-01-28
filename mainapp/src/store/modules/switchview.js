//초기 state
const initState = { id: 'main' };

//action type 정의하기
const BLOCK = 'switchview/BLOCK';
const CALENDAR = 'switchview/CALENDAR';
const SUBMIT = 'switchview/SUBMIT';

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

//Reducer 설정
export default function switchView(state = initState, action) {
  switch (action.type) {
    case BLOCK:
      return { id: '목록 보기' };
    case CALENDAR:
      return { id: '캘린더 보기' };
    case SUBMIT:
      return { id: '제출버튼' };
    default:
      return state;
  }
}
