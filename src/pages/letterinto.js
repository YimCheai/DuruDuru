import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import bg from '../images/background2.svg';
import vote from '../images/vote.png';
import vote2 from '../images/vote2.png';
import voteIcon from '../images/vote_icon.svg';
import chatIcon from '../images/chat_icon.svg';
import '../index.css';
import BottomBar from '../component/BottomBar.jsx';

export default function LetterintoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answerText, setAnswerText] = useState('');

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/questions`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const allQuestions = await response.json();
        const foundQuestion = allQuestions.find(q => q.questionId === id);
        setCurrentQuestion(foundQuestion);
      } catch (error) {
        console.error("Failed to fetch question:", error);
      }
    };

    fetchQuestion();
  }, [id]); // Re-fetch when ID changes

  if (!currentQuestion) {
    return <div>질문을 찾을 수 없습니다.</div>;
  }

  const handleAnswerSubmit = async () => {
    if (answerText.trim() === '') return;

    const newAnswer = {
      answerId: `a${Date.now()}`,
      questionId: currentQuestion.questionId,
      content: answerText,
      createAt: new Date().toISOString(),
      password: "dummy_password", // Dummy value
      profileImage: "dummy_url" // Dummy value
    };

    try {
      const response = await fetch(`http://localhost:5000/api/questions/${id}/answers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAnswer),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // After successful submission, re-fetch the question to update answers
      const updatedQuestionResponse = await fetch(`http://localhost:5000/api/questions`);
      const allQuestions = await updatedQuestionResponse.json();
      const updatedQuestion = allQuestions.find(q => q.questionId === id);
      setCurrentQuestion(updatedQuestion);
      setAnswerText('');
      navigate('/main'); // Navigate to main page after submission

    } catch (error) {
      console.error("Failed to submit answer:", error);
    }
  };

  return (
    <div className='container'>
      <div
        style={{
          height: '852px',
          width: '393px',
          backgroundImage: `url(${bg})`,
          backgroundSize: '393px 852px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* 오늘의 고민 + 아이콘 */}
        <div
          style={{
            position: 'absolute',
            top: '131px',
            left: '107px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              fontFamily: 'IsYun',
              fontSize: '32px',
              color: '#5A6CAA',
              fontWeight: 'bold',
              textShadow: '0 0 0.2px #5A6CAA',
            }}
          >
            오늘의 고민
          </span>
          <img
            src={voteIcon}
            alt="vote icon"
            style={{
              width: '32px',
              height: '32px',
            }}
          />
        </div>

        {/* 기존 투표 이미지 */}
        <img
          src={vote}
          alt="vote"
          style={{
            position: 'absolute',
            top: '205px', // 위로 올림
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto',
            height: 'auto',
          }}
        />

        {/* 새 투표 이미지 (vote2.png) */}
        <div
          style={{
            position: 'absolute',
            top: '235px', // 위로 올림
            left: '66px',
            right: '75px',
            width: 'auto',
            height: 'auto',
          }}
        >
          <img
            src={vote2}
            alt="vote2"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />

          {/* 제목 + 내용 텍스트 */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '18px',
              width: '199px',
              height: '215px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* 제목 */}
            <div
              style={{
                fontSize: '20px',
                color: '#2D2D2D',
                fontWeight: 'bold',
                fontFamily: 'IsYun',
                textAlign: 'center',
                marginBottom: '45px',
                boxShadow: 'inset 0 -10px 0 rgba(177, 194, 253, 0.44)',
                padding: '2px 4px',
                boxSizing: 'border-box',
              }}
            >
              {currentQuestion.title}
            </div>

            {/* 내용 */}
            <div
              style={{
                width: '100%',
                height: '170px',
                fontSize: '16px',
                color: '#707070',
                fontFamily: 'IsYun',
                lineHeight: '1.4',
                padding: '8px',
                boxSizing: 'border-box',
                textAlign: 'left',
                overflowY: 'auto',
              }}
            >
              {currentQuestion.content}
            </div>
          </div>
        </div>

        {/* 하단 흰색 사각형 (입력 가능) */}
        <div
          style={{
            position: 'absolute',
            bottom: '171px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '280px',
            height: '44px',
            backgroundColor: '#ffffff',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 18.5px',
            boxSizing: 'border-box',
          }}
        >
          <input
            type="text"
            placeholder="당신의 따뜻한 조언이 듣고 싶어요"
            style={{
              fontFamily: 'IsYun',
              fontSize: '14px',
              color: '#707070',
              border: 'none',
              outline: 'none',
              width: '100%',
              marginLeft: '17px',
              background: 'transparent',
            }}
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleAnswerSubmit();
              }
            }}
          />
          <img
            src={chatIcon}
            alt="chat icon"
            style={{
              width: '18px',
              height: '18px',
              cursor: 'pointer'
            }}
            onClick={handleAnswerSubmit}
          />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
