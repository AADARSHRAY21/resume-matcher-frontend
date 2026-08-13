import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ResumeUpload from './pages/ResumeUpload.jsx';
import JdUpload from './pages/JdUpload.jsx';
import MatchAnalyze from './pages/MatchAnalyze.jsx';

function App() {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/resume-upload"
          element={
            <ProtectedRoute>
              <ResumeUpload />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jd-upload"
          element={
            <ProtectedRoute>
              <JdUpload />
            </ProtectedRoute>
          }
        />
        <Route
          path="/match"
          element={
            <ProtectedRoute>
              <MatchAnalyze />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;