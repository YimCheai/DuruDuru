import React from 'react';
import bg from '../images/background2.svg';

export default function WritePage() {
  return (
    <div
      style={{
        height: '852px',      // 이미지 원본 세로
        width: '393px',       // 이미지 원본 가로
        backgroundImage: `url(${bg})`,
        backgroundSize: '393px 852px', // 고정 크기
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left', // 좌측 상단 기준
        margin: '0 auto', // 가운데 정렬 (선택 사항)
      }}
    >
      {/* 입력창, 버튼 등 추가 가능 */}
    </div>
  );
}
