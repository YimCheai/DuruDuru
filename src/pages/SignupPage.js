import './css/SignupPage.css';
import React from 'react';
import logo from "../images/logoImage.svg";
import userIcon from "../images/userIcon.svg";
import pwIcon from "../images/pwIcon.svg";
import arrowIcon from "../images/lowArrow.svg";

function SignupPage() {
    return (
    <div className='Elements'>
        <div className='titleBox1'>
            <img src={logo} className="logo" />  
            <p className="welcome-text">
                두루두루에 오신 것을 환영합니다!
            </p>
        </div>

        <div className='inputBox1'>
            <div className="input-wrapper">
                <input type="text" placeholder="아이디를 입력하세요!" />
                <img src={userIcon}  className="icon" />
            </div>
            
            <div className="input-wrapper">
                <input type="password" placeholder="비밀번호를 입력하세요!" />
                <img src={pwIcon} className="icon" />
            </div>

            <div className="input-wrapper">
                <input type="password" placeholder="비밀번호를 한번 더 입력하세요!" />
                <img src={pwIcon} className="icon" />
            </div>

            <div className="email-wrapper">
              <div className="input-wrapper1">
                <input type="firstEmail" placeholder="이메일 주소" />
              </div>
              @
              <div className="input-wrapper2">
                <input type="firstEmail" placeholder="gmail.com" />
                <select>
                  <option value={"gmail.com"}>gmail.com</option>
                  <option value={"naver.com"}>naver.com</option>
                  <option value={"hanmail.com"}>hanmail.com</option>
                </select>
               </div>
               
            </div>
        </div>
        
        <div className='buttonBox'>
            <button className="logIn-button1">로그인</button>
        </div>
    </div>
    
  );
}
export default SignupPage;