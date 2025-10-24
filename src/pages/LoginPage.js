import React from 'react';
import logo from "../images/logoImage.svg";
import './style.css';

function LoginPage(){
    return (
    <div className='Elements'>
        <div className='titleBox'>
            <img src={logo} className="logo" />  
            <p className="welcome-text">
                두루두루에 돌아오신 것을 환영합니다!
            </p>
        </div>

        <div className='inputBox'>
            <div className="input-wrapper">
                <input type="text" placeholder="아이디를 입력하세요!" />
                <img src="/images/id-icon.svg"  className="icon" />
            </div>
            
            <div className="input-wrapper">
                <input type="password" placeholder="비밀번호를 입력하세요!" />
                <img src="/images/pw-icon.svg" className="icon" />
            </div>
        </div>
        
        <div className='buttonBox'>
            <button className="logIn-button">로그인</button>
        </div>
    </div>
    
  );
}
export default LoginPage;