//개별 store

//초기 state
const initState = {
  list: [],
};

//action type 정의하기
const CURRENT = 'checkwork/CURRENT';
const INPUT = 'checkwork/INPUT';
const DELETE = 'checkwork/DELETE';

//action 생성 함수
export function currentWork(payload) {
  return {
    type: CURRENT,
    payload,
  };
}

export function inputWork(payload) {
  return {
    type: INPUT,
    payload,
  };
}

export function delWork(id) {
  return {
    type: DELETE,
    id,
  };
}

//Reducer 설정
export default function checkWork(state = initState, action) {
  switch (action.type) {
    case CURRENT:
      return { list: action.payload };
    case INPUT:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          name: action.payload.name,
          wage: 0,
          payday: action.payload.payday,
          worktime: action.payload.worktime,
          pay: action.payload.pay,
          benefit: action.payload.benefit,
          tax: action.payload.tax,
        }),
        nextID: action.payload.id + 1,
      };
    case DELETE:
      return console.log('근무지 삭제');
    default:
      return state;
  }
}
