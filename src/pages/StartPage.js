import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../images/logoImage.svg";
import googleLogo from "../images/google.svg";
import { auth, provider, db } from "../fireBase/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import './css/StartPage.css';

function StartPage() {

  async function handleGoogleLogin() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("로그인 성공:", user.displayName, user.email);

      // Firestore에 저장
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastLogin: new Date()
      }, { merge: true });

      alert(`환영합니다, ${user.displayName}님!`);
      navigate("/MainPage");
      // 예: window.location.href = "/main";
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  }

  return (
    <div className='Elements'>
      <div className='titleBox'>
        <img src={logo} className="logo" alt="두루두루 로고" />
        <p className="welcome-text">두루두루에 오신 것을 환영합니다!</p>
      </div>

      <div className='buttonBox1'>
        <button className="logIn-button">로그인</button>
        <button className="google-button" onClick={handleGoogleLogin}>
          <img src={googleLogo} className="googleLogo" alt="Google 로고" />
          <span className='googleText'>Google로 시작하기</span>
        </button>
      </div>
    </div>
  );
}

export default StartPage;