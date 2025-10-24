import React, { useState } from 'react';
import './style.css'; // 스타일을 위한 CSS 파일을 임포트합니다.

function Main() {
  // 1. 편지(고민) 데이터를 state로 관리
  const [worries, setWorries] = useState([
    { id: 1, text: '가장 친한 친구랑 다퉜을 때 넌 어떻게 해?' },
    { id: 2, text: '부모님께 심한 말을 해버렸어... 어떡해??' },
    { id: 3, text: '전공이 너무 어려운데 어떡해요' },
  ]);

  return (
    // 2. 전체 배경은 container에 적용 (style.css에서)
    <div className="container">
      
      {/* 3. 요청하신 '제목' */}
      <h1 className="title">오늘의 고민들 💌</h1>

      {/* 4. 편지 목록 (worry-list) */}
      <main className="worry-list">
        {worries.map((worry) => (
          // 5. 편지 카드 (CSS로 배경 이미지 적용)
          <div key={worry.id} className="letter-card">
            <p className="worry-text">{worry.text}</p>
            <span className="to-you">to. you</span>
          </div>
        ))}
      </main>

      {/* (하단 네비게이션 바 등 전부 제외) */}
      
    </div>
  );
}

export default Main;