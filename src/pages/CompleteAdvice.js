import React from 'react';
import bg from '../images/background2.svg';
import vote from '../images/vote.png';
import vote2 from '../images/vote2.png';
import voteIcon from '../images/vote_icon.svg';
import chatIcon from '../images/chat_icon.svg';
import sendAdvice from '../images/send_advice.svg';
import xIcon from '../images/x.svg'; // x.svg import
import '../index.css';
import BottomBar from '../component/BottomBar.jsx';

export default function WritePage() {
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
        {/* 화면 전체 어둡게 오버레이 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          }}
        ></div>

        {/* 콘텐츠 전체 */}
        <div style={{ position: 'relative', zIndex: 2, filter: 'brightness(0.7)' }}>
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
              top: '205px',
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

            {/* 제목 + 내용 텍스트 */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: '18px',
                width: '199px',
                height: '215px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
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
                야르
              </div>
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
                야르
              </div>
            </div>
          </div>

          {/* 하단 입력창 */}
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
              filter: 'brightness(0.7)',
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
            />
            <img
              src={chatIcon}
              alt="chat icon"
              style={{
                width: '18px',
                height: '18px',
              }}
            />
          </div>
        </div>

        {/* send_advice.svg + x.svg */}
        <div
          style={{
            position: 'absolute',
            top: '367px',
            right: '53px',
            width: '300px',
            height: '152px',
            zIndex: 3,
          }}
        >
          <img
            src={sendAdvice}
            alt="send advice"
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
            }}
          />
          <img
            src={xIcon}
            alt="close"
            style={{
              position: 'absolute',
              top: '10px',
              left: '15px',
              width: '12px',
              height: '12px',
            }}
          />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
