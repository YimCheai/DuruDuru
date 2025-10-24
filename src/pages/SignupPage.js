import './css/SignupPage.css';
import React from 'react';

function SignupPage() {
  return (
    <div className='Elements'>
      
      <p className="welcome-text">
        두루두루에 오신것을 환영합니다!
      </p>

      <div className="input-container">
        <input type="text" placeholder="이메일"/>
        <input type="password" placeholder="비밀번호"/>
        <input type="password" placeholder="비밀번호 확인"/>
      </div>

      <button className="signup-button">회원가입!!!!!!!!</button>

      <button className="google-button">
        구글 계정으로 가입
      </button>
    </div>
  );
}

export default SignupPage;