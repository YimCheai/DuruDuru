import React, { useState } from 'react';
import './style.css'; // 스타일을 위한 CSS 파일을 임포트합니다.


// ----- 데이터 -----
// 요청하신 대로 편지 제목을 배열로 관리합니다.
// 나중에 서버에서 받아오거나 할 수 있도록 객체 배열로 만드는 것이 좋습니다.
const initialWorries = [
  { id: 1, text: '가장 친한 친구랑 다투었을 때 넌 어떻게 해?' },
  { id: 2, text: '부모님께 심한 말을 해버렸어... 어떡해??' },
  { id: 3, text: '전공이 너무 어려운데 어떡해요' },
  // 여기에 항목을 추가하면 편지가 자동으로 더 생깁니다.
  // { id: 4, text: '새로운 고민...' }, 
];

// ----- 1. 헤더 컴포넌트 -----
function Header() {
  return (
    <header className="header">
      <h1>오늘의 고민들 📩</h1>
    </header>
  );
}

// ----- 2. 편지(카드) 컴포넌트 -----
// 각 편지 하나의 UI를 담당합니다.
function WorryCard({ text }) {
  return (
    <div className="worry-card">
      {/* 편지봉투의 흰색 V자 모양 장식 */}
      <div className="envelope-flap">
        <div className="flap-line-left"></div>
        <div className="flap-heart">♡</div>
        <div className="flap-line-right"></div>
      </div>
      
      {/* 편지 내용 (고민 텍스트) */}
      <p className="worry-text">{text}</p>
      
      {/* to. you 텍스트 */}
      <p className="to-you">to. you</p>
    </div>
  );
}

// ----- 3. 편지 목록 컴포넌트 (스크롤 영역) -----
// 편지 배열을 받아 스크롤 가능한 목록을 만듭니다.
function WorryList({ worries }) {
  return (
    <main className="worry-list-container">
      {/* worries 배열을 map()으로 순회합니다.
        배열의 각 항목(worry)마다 <WorryCard> 컴포넌트를 하나씩 생성합니다.
        key={worry.id}는 React가 각 항목을 구분하기 위해 필요합니다.
        text={worry.text}로 편지 내용을 props로 전달합니다.
      */}
      {worries.map((worry) => (
        <WorryCard key={worry.id} text={worry.text} />
      ))}
    </main>
  );
}

// ----- 4. 하단 네비게이션 컴포넌트 -----
function BottomNav() {
  return (
    <nav className="bottom-nav">
      {/* 아이콘은 간단히 이모지로 대체했습니다. */}
      <button className="nav-icon">🏠</button>
      <button className="nav-icon-plus">+</button>
      <button className="nav-icon">👤</button>
    </nav>
  );
}

// ----- 5. 앱 전체를 조립하는 메인 컴포넌트 -----
function App() {
  // useState를 사용해 고민 배열을 '상태'로 관리합니다.
  const [worries, setWorries] = useState(initialWorries);

  return (
    <div className="app-container">
      <Header />
      <WorryList worries={worries} />
      <BottomNav />
    </div>
  );
}

export default App;