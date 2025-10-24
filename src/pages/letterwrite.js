import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../images/background2.svg';
import vote from '../images/vote.png';
import vote2 from '../images/vote2.png';
import voteIcon from '../images/vote_icon.svg';
import writeIcon from '../images/write_icon.svg';
import '../index.css';
import BottomBar from '../component/BottomBar.jsx';

export default function LetterWrite() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleRef = useRef(null);
  const navigate = useNavigate();

  const [inputWidth, setInputWidth] = useState('100%');

  // 제목 길이에 맞춰 width 자동 조절
  useEffect(() => {
    if (titleRef.current) {
      const span = document.createElement('span');
      span.style.visibility = 'hidden';
      span.style.position = 'absolute';
      span.style.font = 'bold 20px IsYun';
      span.textContent = title || titleRef.current.placeholder;
      document.body.appendChild(span);
      const width = span.offsetWidth + 10;
      document.body.removeChild(span);
      setInputWidth(width > 199 ? '199px' : `${width}px`);
    }
  }, [title]);

  const handleSubmitQuestion = async () => {
    if (title.trim() === '' || content.trim() === '') {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    const currentUserId = localStorage.getItem('currentUserId');
    if (!currentUserId) {
      alert('로그인이 필요합니다.');
      navigate('/start'); // Redirect to login if not logged in
      return;
    }

    const newQuestion = {
      questionId: `q${Date.now()}`,
      userId: currentUserId, // Use currentUserId from localStorage
      title: title,
      content: content,
      createdAt: new Date().toISOString(),
      answerCount: 0,
      limit: 3, // Dummy value
      answers: []
    };

    try {
      const response = await fetch('http://localhost:5000/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuestion),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Question submitted successfully:', result);
      navigate('/main'); // Navigate to main page after submission

    } catch (error) {
      console.error("Failed to submit question:", error);
      alert('질문 제출에 실패했습니다. 다시 시도해주세요.');
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
        {/* 고민 편지쓰기 + 아이콘 */}
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
            고민 편지쓰기
          </span>
          <img
            src={voteIcon}
            alt="vote icon"
            style={{ width: '32px', height: '32px' }}
          />
        </div>

        {/* 기존 투표 이미지 */}
        <img
          src={vote}
          alt="vote"
          style={{
            position: 'absolute',
            top: '205px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto',
            height: 'auto',
          }}
        />

        {/* 새 투표 이미지 */}
        <div
          style={{
            position: 'absolute',
            top: '235px',
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

          {/* 제목 + 내용 입력 */}
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
            {/* 제목 input + 왼쪽 아이콘 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '45px',
                width: '100%',
                position: 'relative',
                marginLeft: '40px', // 제목과 아이콘 전체 오른쪽 이동
              }}
            >
              {!title && (
                <img
                  src={writeIcon}
                  alt="write icon"
                  style={{
                    position: 'absolute',
                    left: '0',
                    width: '18px',
                    height: '18px',
                  }}
                />
              )}
              <input
                ref={titleRef}
                type="text"
                placeholder="제목을 작성하세요!"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  width: inputWidth,
                  fontSize: '17px',
                  color: '#2D2D2D',
                  fontWeight: 'bold',
                  fontFamily: 'IsYun',
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  boxShadow: 'inset 0 -10px 0 rgba(177, 194, 253, 0.44)',
                  padding: '2px 4px 2px 24px', // 아이콘 공간 확보
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* 내용 textarea + 왼쪽 아이콘 */}
            <div style={{ width: '100%', position: 'relative', marginLeft: '10px' }}>
              {!content && (
                <img
                  src={writeIcon}
                  alt="write icon"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '5px',
                    width: '10px',
                    height: '10px',
                    marginLeft: '10px',
                    marginTop: '30px'
                  }}
                />
              )}
              <textarea
                placeholder="당신의 고민을 적어주세요!!"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{
                  width: '100%',
                  height: '170px',
                  fontSize: '14px',
                  color: '#707070',
                  fontFamily: 'IsYun',
                  lineHeight: '1.4',
                  padding: '8px 8px 8px 20px', // 왼쪽 padding으로 아이콘 공간 확보
                  boxSizing: 'border-box',
                  textAlign: 'left',
                  resize: 'none',
                  overflowY: 'auto',
                  border: 'none',
                  outline: 'none',
                  marginLeft: '10px',
                  marginTop: '30px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <BottomBar showCheckIcon={true} onCheckClick={handleSubmitQuestion} />
    </div>
  );
}
