import React from 'react';
import logo from "../images/logoImage.svg";
import googleLogo from "../images/google.svg";
import './StartPage.css';

function StartPage(){
    return (
    <div className='Elements'>
      <div className='titleBox'>
        <img src={logo} className="logo" />  
        <p className="welcome-text">
          두루두루에 오신것을 환영합니다!
        </p>
      </div>

      <div className='buttonBox'>
        <button className="logIn-button">로그인</button>
        <button className="google-button">
          <img src={googleLogo} className="googleLogo" />
          <div className='googleText'>Google로 시작하기</div>
        </button>
      </div>

    </div>
  );
}
export default StartPage;