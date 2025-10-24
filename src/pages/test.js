import React, { useState } from 'react';
// MainPages.js가 스타일을 사용하므로 여기서 CSS를 임포트합니다.
// import '/'; 

// ----- 데이터 -----
// 편지 제목 배열
const initialWorries = [
  { id: 1, text: '가장 친한 친구랑 다투었을 때 넌 어떻게 해?' },
  { id: 2, text: '부모님께 심한 말을 해버렸어... 어떡해??' },
  { id: 3, text: '전공이 너무 어려운데 어떡해요' },
];

function MainPages() {
  
  // ----- 상태 관리 -----
  const [worries, setWorries] = useState(initialWorries);
  

  // ----- UI 렌더링 영역 -----
  return (
    // <div className="app-container"> 태그는
    // 이제 이 컴포넌트의 최상위 태그가 됩니다.
    <div className="app-container">
      
      {/* ----- 1. 헤더 ----- */}
      <header className="header">
        <h1>오늘의 고민들 📩</h1>
      </header>
      
      {/* ----- 3. 편지 목록 (스크롤 영역) ----- */}
      <main className="worry-list-container">
        
        {/* worries 배열을 map()으로 순회 */}
        {worries.map((worry) => (
          
          /* ----- 2. 편지(카드) ----- */
          <div className="worry-card" key={worry.id}>
            
            {/* 1. 편지지 배경 이미지 */}
            <img 
              src="/letter-bg.png" 
              alt="편지지 배경" 
              className="worry-card-image" 
            />
            
            {/* 2. 편지 내용 (고민 텍스트) */}
            <p className="worry-text">{worry.text}</p>
            
            {/* 3. to. you 이미지 */}
            <img 
              src="/to-you.png" 
              alt="To You" 
              className="to-you-image" 
            />
          </div>

        ))}
      </main>
      
      {/* ----- 4. 하단 네비게이션 ----- */}
      <nav className="bottom-nav">
        <button className="nav-icon">🏠</button>
        <button className="nav-icon-plus">+</button>
        <button className="nav-icon">👤</button>
      </nav>
      
    </div>
  );
}

export default MainPages;