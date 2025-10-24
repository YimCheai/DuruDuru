import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/Chatting.css';
import BottomBar from '../component/BottomBar.jsx';
import letterIcon from '../images/Letter_icon.svg';
import backIcon from '../images/back_arrow.svg'; 
import questionsData from '../data/questions.json';

function Chatting() {
    const { id } = useParams();
    const question = questionsData.find(q => q.questionId === id);

    if (!question) {
        return <div>채팅을 찾을 수 없습니다.</div>;
    }

    // 1. "고민 채팅"에 맞는 데이터로 변경
    // (이 데이터는 나중에 이전 페이지에서 받아와야 합니다)
    // const [question, setQuestion] = useState('가장 친한 친구랑 다퉜을 때 넌 어떻게 해?'); // Removed hardcoded state
    
    // 2. 채팅 메시지 목록 (이미지 내용 기준)
    // const [messages, setMessages] = useState([
    //     { id: 1, text: '나 같으면 좀 진정된 다음에 먼저 톡 해볼 것 같아. 괜히 어색해지는 것보다 솔직하게 얘기하는 게 훨씬 낫잖아!' },
    //     { id: 2, text: '잠깐 거리를 두고 서로 생각 정리할 시간 가지는 것도 괜찮아.' },
    //     { id: 3, text: '직접 얼굴 보고 얘기하면 오해가 훨씬 빨리 풀릴수도 있어!'}
    // ]); // Removed hardcoded state
    
    return (
        <div className="container">
            {/* 3. 헤더 (제목: "고민 채팅") */}
            <div className="header">
                <img src={backIcon} alt="뒤로가기" className="back-icon" />
                <div className="title-group">
                    <h1 className="title">고민 채팅</h1>
                    <img src={letterIcon} alt="편지 아이콘" className="title-icon" />
                </div>
            </div>

            {/* 4. "고민 목록" 대신 "채팅 영역"으로 변경 */}
            <main className="chat-area">
                
                {/* 4-1. 나의 질문 (흰색 말풍선) */}
                <div className="chat-bubble-question">
                    <p>{question.title}</p>
                </div>
                
                {/* 4-2. 다른 사람들의 조언 (파란색 말풍선) */}
                {question.answers.map((answer) => (
                    <div key={answer.answerId} className="chat-bubble-reply">
                        <p>{answer.content}</p>
                    </div>
                ))}

            </main>
            
            <BottomBar />
        </div>
    );
}

export default Chatting;