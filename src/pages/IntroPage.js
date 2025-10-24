import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function IntroPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/start'); // 3초 후 StartPage로 이동
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1>인트로</h1>
    </div>
  );
}
const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' },
};

export default IntroPage;