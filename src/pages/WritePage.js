import React from 'react';
import bg from '../images/background2.svg'; // src/pages 기준으로 상위(src) → images

export default function WritePage() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* 나중에 입력창, 버튼 추가 가능 */}
    </div>
  );
}
