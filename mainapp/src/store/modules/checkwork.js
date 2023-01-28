//개별 store

//초기 state
const initState = {
    list: [
        {
            name: '근무지1',
            payday: '2023-01-01',
            worktime: 5,
            pay: 12000,
            benefit: 'n',
            tax: 0
        }
    ]
}

//action type 정의하기
const INPUT = "checkwork/INPUT";
const DELETE = "checkwork/DELETE";

//action 생성 함수
export function inputWork(payload) {
    return {
        type: INPUT,
        payload,
    }
}

export function delWork(id) {
    return {
        type: DELETE,
        id,
    }
}

//Reducer 설정
export default function checkwork(state = initState, action) {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                list: state.list.concat({
                    id: action.payload.id,
                    name: action.payload.name,
                    payday: action.payload.payday,
                    worktime: action.payload.worktime,
                    pay: action.payload.pay,
                    benefit: action.payload.benefit,
                    tax: action.payload.tax,
                }),
                nextID: action.payload.id + 1,
        };
        case DELETE:
            return console.log("근무지 삭제");
        default:
            return state;
    }
  }