import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/ProfilePage.css';
import BottomBar from '../component/BottomBar.jsx';
import letterIcon from '../images/Letter_icon.svg';
// 1. 뒤로 가기 아이콘을 import 합니다 (파일 경로는 실제 위치에 맞게 수정하세요)
import backIcon from '../images/back_arrow.svg'; 

function ProfilePage() {
    const navigate = useNavigate();
    const currentUserId = localStorage.getItem('currentUserId'); // Get user ID from localStorage

    const [worries, setWorries] = useState([]);

    useEffect(() => {
        const fetchUserQuestions = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/questions');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const allQuestions = await response.json();
                const userQuestions = allQuestions
                    .filter(q => q.userId === currentUserId)
                    .map(q => ({ 
                        id: q.questionId, 
                        title: q.title, 
                        adviceCount: q.answers ? q.answers.length : 0 
                    }));
                setWorries(userQuestions);
            } catch (error) {
                console.error("Failed to fetch user questions:", error);
            }
        };

        fetchUserQuestions();
    }, [currentUserId]); // Re-fetch when currentUserId changes
    
    const handleWorryCardClick = (id) => {
        navigate(`/chatting/${id}`);
    };

    return (
        <div className="container">

            {/* 3. 헤더 구조를 변경합니다 (뒤로 가기 버튼 추가) */}
            <div className="header">
                <img src={backIcon} alt="뒤로가기" className="back-icon" />
                <div className="title-group">
                    <h1 className="title">나의 고민 편지</h1>
                    <img src={letterIcon} alt="편지 아이콘" className="title-icon" />
                </div>
            </div>

            {/* 4. 리스트 렌더링 부분을 새 클래스와 데이터로 변경합니다. */}
            <main className="worry-list">
                {worries.map((worry) => (
                    // 'letter-card' 대신 새 클래스 'worry-card'를 사용합니다.
                    <div 
                        key={worry.id} 
                        className="worry-card"
                        onClick={() => handleWorryCardClick(worry.id)}
                    >
                        <span className="worry-title">{worry.title}</span>
                        <span className="advice-count">{worry.adviceCount}개의 조언</span>
                    </div>
                ))}
            </main>
            
            <BottomBar />
        </div>
    );
}

export default ProfilePage;