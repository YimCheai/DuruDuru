import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/MainPage.css';
import BottomBar  from '../component/BottomBar.jsx'
import letterIcon from '../images/Letter_icon.svg';

function Main() {
  const [worries, setWorries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/questions');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const currentUserId = localStorage.getItem('currentUserId');
        
        // Filter out questions posted by the current user
        const filteredData = data.filter(q => q.userId !== currentUserId);

        setWorries(filteredData.map(q => ({ id: q.questionId, text: q.title })));
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/letterinto/${id}`);
  };

  return (
    <div className="container">

      <div className="header">
        <h1 className="title">오늘의 고민들</h1>
        <img src={letterIcon} alt="편지 아이콘" className="title-icon" />
      </div>

      <main className="worry-list">
        {/* worries 배열의 개수가 100개여도 index는 0~99까지 순서대로 들어옵니다. */}
        {worries.map((worry, index) => (
          <div
            key={worry.id}
            // 이 코드가 0, 1, 2를 자동으로 순환시켜 줍니다.
            className={`letter-card letter-card-${index % 3}`}
            onClick={() => handleCardClick(worry.id)}
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