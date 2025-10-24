import React from 'react';
import logo from "../images/logoImage.svg";
import googleLogo from "../images/google.svg";
import './css/StartPage.css';

function StartPage() {
  return (
    <div className='Elements'>
      <div className='titleBox'>
        <img src={logo} className="logo" alt="두루두루 로고" />
        <p className="welcome-text">
          두루두루에 오신 것을 환영합니다!
        </p>
      </div>

      <div className='buttonBox1'>
        <button className="logIn-button">로그인</button>
        <button className="google-button">
          <img src={googleLogo} className="googleLogo" alt="Google 로고" />
          <div className='googleText'>Google로 시작하기</div>
        </button>
      </div>
    </div>
  );
}

export default StartPage;
