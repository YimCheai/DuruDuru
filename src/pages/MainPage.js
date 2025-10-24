import React, { useState } from 'react';
// CSS 경로는 실제 위치에 맞게 '../css/MainPage.css' 또는 './css/MainPage.css'로 설정하세요.
import './css/MainPage.css';
// SVG 이미지를 import할 필요 없습니다 (CSS 배경으로 처리)
// import letterIcon from '../images/Letter_icon.svg'; 

function Main() {
  const [worries, setWorries] = useState([
    { id: 1, text: '가장 친한 친구랑 다퉜을 때 넌 어떻게 해?' },
    { id: 2, text: '부모님께 심한 말을 해버렸어... 어떡해??' },
    { id: 3, text: '전공이 너무 어려운데 어떡해요' },
  ]);

  return (
    <div className="container">
      
      <div className="header">
        <h1 className="title">오늘의 고민들</h1>
        {/* 편지 아이콘은 필요하면 남기시고, 아니면 이 img 태그를 지우세요 */}
        {/* <img src={letterIcon} alt="편지 아이콘" className="title-icon" /> */}
      </div>

      <main className="worry-list">
        {worries.map((worry) => (
          // 5. 편지 카드 (CSS로 배경 이미지 적용)
          <div key={worry.id} className="letter-card">
            {/* 배열의 text가 편지지 위에 표시됩니다. 
              CSS에서 .letter-card에 편지지 이미지를 배경으로 넣으면 됩니다.
            */}
            <p className="worry-text">{worry.text}</p>
            
            {/* "to. you" span 태그 삭제됨 */}
          </div>
        ))}
      </main>
      
    </div>
  );
}

export default Main;