

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Box from './componet/Box';
import LoginPage from './LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';   
import './App.css';






function App() {

  const [isLoginPageVisible, setLoginPageVisible] = useState(false);
  // const [count, setCount] =useState(0);.
  const count = useSelector(state => state.count)
  let id = useSelector(state => state.id)
  // let password = useSelector(state => state.password)
  const dispatch = useDispatch()

  // const increase =() =>{
  //   dispatch({type:"INCREMENT", payload:{num:5}})
  //   // setCount(count+1)
  // }

  // const decrease =() => {
  //   dispatch({type:"DECREMENT"})
  // }

  // const login =() => {
  //   dispatch({type: "LOGIN",payload: {id: "111", password: "123"}})
  // }

  const login = () => {
    setLoginPageVisible(true);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      dispatch({ type: "CLEAR" });
    }
  };

  const handleLoginSuccess = () => {
    setLoginPageVisible(false);  // 로그인 성공 시 로그인 페이지 숨기기
  };






  // const displayValue = useSelector((state) => state.displayValue);
  const expression = useSelector((state) => state.expression);

  const handleNumberClick = (number) => {
    dispatch({ type: 'INPUT_NUMBER', payload: number });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR' });
  };

  const handleOperatorClick = (operator) => {
    dispatch({ type: 'OPERATOR', payload: operator });
  };

  const handleEvaluate = () => {
    dispatch({ type: 'EVALUATE' });
  };




  return (
   
    <div className="App">

    <Container>


        {isLoginPageVisible ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : (


        <div className='login-Box'>
        {id ? (
          <h1>안녕하세요 {id}님</h1>
        ) : (
          <h1>로그인 해주세요</h1>
        )}
        {id ? (
          <button className='logout' onClick={handleLogout}>로그아웃</button>
        ) : (
          <button className='login' onClick={login}>로그인</button>
        )}
      </div>
      )}

      {/* <Box /> */}
      <div className='result-box'>
        <div className="expression">{expression}</div> {/* 연산 과정 표시 */}
        <h1>{count}</h1>
      </div>
      {/*       
        <button onClick = {increase}>더하기</button>
        <button onClick = {decrease}>빼기</button> */}

        <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleNumberClick('')} className="special"></button>
        <button onClick={() => handleNumberClick('0')} className="zero">0</button>
        <button onClick={() => handleNumberClick('')} className="special"></button>
        <button onClick={() => handleNumberClick('')} className="special"></button>
      </div>

      </Container>
    </div>
    
  );
}

export default App;
