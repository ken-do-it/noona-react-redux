
let initialState ={
    count : '0',

    operator: null,
    previousValue: null,
    waitingForNewValue: false, // 새로운 값을 기다리는 상태 추가
    expression: '', // 연산 과정을 저장할 필드 추가
    lastResult: null, // 마지막 결과값을 저장할 필드 추가
    id:"",
    password:"",

}


// const  calculatorReducer =(state = initialState, action)=> {
    const  reducer =(state = initialState, action)=> {
    switch (action.type) {

        case 'LOGIN':
            return {
                ...state,
                id: action.payload.id,  // id 상태 업데이트
                password: action.payload.password,  // password 상태 업데이트
            };
            
        case 'INPUT_NUMBER':
            // "=" 버튼 이후 숫자를 눌렀을 때 초기화
        if (state.waitingForNewValue && state.operator === null) {
            return {
            ...state,
            count: action.payload,

            expression: action.payload,
            waitingForNewValue: false,
            lastResult: null,
            };
        }
        return {
            ...state,
                count:
            // displayValue:
            state.waitingForNewValue
                ? action.payload
                :state.count === '0'
 
                ? action.payload
                :state.count + action.payload,

            waitingForNewValue: false,
            expression: state.waitingForNewValue
            ? state.expression + action.payload
            : state.expression === ''
            ? action.payload
            : state.expression + action.payload,
        };
        case 'CLEAR':
        return initialState;
        case 'OPERATOR':
            if (state.waitingForNewValue && state.operator === null && state.lastResult !== null) {
                return {
                    ...state,
                    operator: action.payload,
                    previousValue: state.lastResult,
                    waitingForNewValue: true,
                    expression: state.lastResult + ' ' + action.payload + ' ',
                };
                }
                return {
                ...state,
                operator: action.payload,
                previousValue: state.count,

                waitingForNewValue: true,
                expression:
                    state.expression === ''
                    ? state.count + ' ' + action.payload + ' '

                    : state.expression + ' ' + action.payload + ' ',
                };
        case 'EVALUATE':
        const current = parseFloat(state.count);
        // const current = parseFloat(state.displayValue);
        const previous = parseFloat(state.previousValue);
        let result = 0;
        switch (state.operator) {
            case '+':
            result = previous + current;
            break;
            case '-':
            result = previous - current;
            break;
            case '*':
            result = previous * current;
            break;
            case '/':
            result = previous / current;
            break;
            default:
            return state;
        }
        return {
            ...state,
            count: String(result),

            operator: null,
            previousValue: null,
            waitingForNewValue: true, // 결과가 나온 후 새로운 입력을 기다림

        };
        default:
        return state;
    }
    }





// const reducer =(state = initialState, action) =>{
//     console.log("action is " ,action)
//     if (action.type === "INCREMENT"){
//         return {...state, count: state.count + action.payload.num}
//     } else if (action.type === "LOGIN") {
//         return {...state, id: action.payload.id, password: action.payload.password}
//     }else if (action.type === "DECREMENT"){
//         return {...state, count : state.count -1}
//     }

//     return {...state}
// }

export default reducer;