// src/LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function LoginPage({ onLoginSuccess }) {
  const [id, setId] = useState('');
//   const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (id) {
      dispatch({ type: "LOGIN", payload: { id} });
      onLoginSuccess(); // 로그인 성공 시 부모 컴포넌트에 알림
    } else {
      alert("아이디 입력하세요."); // 아이디와 비밀번호가 입력되지 않았을 때 경고
    }
  };

  return (
    <div className="login-page">
      <h2>로그인</h2>
      <div>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      {/* <div>
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div> */}
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default LoginPage;
