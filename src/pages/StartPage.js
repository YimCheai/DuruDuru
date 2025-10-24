import React from 'react';

function StartPage(){
      return (
    <div className=''>
      {/* 로고 */}
      <img 
        //src="/logo192.png" 
        alt="로고" 
        style={styles.logo}
      />

      {/* 설명 */}
      <p style={styles.description}>
        두루두루에 오신것을 환영합니다!
      </p>

      {/* 입력 폼 */}
      <div style={styles.form}>
        <input type="text" placeholder="이메일" style={styles.input} />
        <input type="password" placeholder="비밀번호" style={styles.input} />
        <input type="password" placeholder="비밀번호 확인" style={styles.input} />
      </div>

      {/* 회원가입 버튼 */}
      <button style={styles.signupButton}>로그인</button>

      {/* 구글 로그인 버튼 */}
      <button style={styles.googleButton}>
        Google로 시작하기
      </button>
    </div>
  );
}
const styles = {
    
};
export default StartPage;