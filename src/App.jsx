import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle.jsx";
import ProtectedLayout from "./components/ProtectedLayout.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ResumeUpload from "./pages/ResumeUpload.jsx";
import JdUpload from "./pages/JdUpload.jsx";
import MatchAnalyze from "./pages/MatchAnalyze.jsx";

function App() {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/resume-upload" element={<ResumeUpload />} />
          <Route path="/jd-upload" element={<JdUpload />} />
          <Route path="/match" element={<MatchAnalyze />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;