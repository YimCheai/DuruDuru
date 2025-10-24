import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import StartPage from './pages/StartPage';
import SignupPage from './pages/SignupPage';
import Loginpage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* 앱 시작 시 보여지는 페이지 */}
        <Route path="/" element={<IntroPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/write" element={<WritePage />} /> {/* WritePage 경로 추가 */}
        <Route path="/main" element={<MainPage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
