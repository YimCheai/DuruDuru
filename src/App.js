import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import StartPage from './pages/StartPage';
import SignupPage from './pages/SignupPage';
import Loginpage from './pages/LoginPage';
import LetterintoPage from './pages/letterinto'; // 기존 WritePage
import LetterWrite from './pages/letterwrite'; // 새 페이지 추가
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import CompleteAdvice from './pages/CompleteAdvice'; // 새 페이지 import
import Chatting from './pages/Chatting'; // Chatting 페이지 import

function App() {
  return (
    <Router>
      <Routes>
        {/* 기존 라우트 */}
        <Route path="/" element={<IntroPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/letterinto/:id" element={<LetterintoPage />} /> 
        <Route path="/letterwrite" element={<LetterWrite />} /> 
        <Route path="/main" element={<MainPage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/MainPage" element={<MainPage />} /> 
        <Route path="/chatting/:id" element={<Chatting />} /> {/* Chatting 페이지 경로 추가 */}

        {/* 새 페이지 경로 바로 추가 */}
        <Route path="/completeadvice" element={<CompleteAdvice />} />
      </Routes>
    </Router>
  );
}

export default App;