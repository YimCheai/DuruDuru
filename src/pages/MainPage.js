import React, { useState } from 'react';
import './css/MainPage.css';
import BottomBar  from '../component/BottomBar.jsx'
function Main() {
  const [worries, setWorries] = useState([
    { id: 1, text: '가장 친한 친구랑 다퉜을 때 넌 어떻게 해?' },
    { id: 2, text: '부모님께 심한 말을 해버렸어... 어떡해??' },
    { id: 3, text: '전공이 너무 어려운데 어떡해요' },
    { id: 4, text: '가장 친한 친구랑 다퉜을 때 넌 어떻게 해?' },
    { id: 5, text: '부모님께 심한 말을 해버렸어... 어떡해??' },
    { id: 6, text: '전공이 너무 어려운데 어떡해요' },
  ]);

  return (
    <div className="container">

      <div className="header">
        <h1 className="title">오늘의 고민들</h1>
        {/* 편지 아이콘은 필요하면 남기시고, 아니면 이 img 태그를 지우세요 */}
        {/* <img src={letterIcon} alt="편지 아이콘" className="title-icon" /> */}
      </div>

      <main className="worry-list">
        {/* worries 배열의 개수가 100개여도 index는 0~99까지 순서대로 들어옵니다. */}
        {worries.map((worry, index) => (
          <div
            key={worry.id}
            // 이 코드가 0, 1, 2를 자동으로 순환시켜 줍니다.
            className={`letter-card letter-card-${index % 3}`}
          >
            <p className="worry-text">{worry.text}</p>
          </div>
        ))}
      </main>
        <BottomBar />
    </div>
  );
}

export default Main;