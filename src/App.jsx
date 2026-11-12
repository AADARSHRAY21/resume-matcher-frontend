import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle.jsx";
import ProtectedLayout from "./components/ProtectedLayout.jsx";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ResumeUpload from "./pages/ResumeUpload.jsx";
import JdUpload from "./pages/JdUpload.jsx";
import MatchAnalyze from "./pages/MatchAnalyze.jsx";
import ResumeGuide from "./pages/ResumeGuide.jsx";
import LayoffsTracker from "./pages/LayoffsTracker.jsx";
import ResumeGuideDetail from "./pages/ResumeGuideDetail.jsx";

const PUBLIC_MARKETING_PATHS = ["/", "/resume-guide", "/layoffs-tracker"];

function AppShell() {
  const location = useLocation();
  const hideGlobalToggle =
  PUBLIC_MARKETING_PATHS.includes(location.pathname) ||
  location.pathname.startsWith("/resume-guide/");

  return (
    <>
      {!hideGlobalToggle && <ThemeToggle />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resume-guide" element={<ResumeGuide />} />
        <Route path="/resume-guide/:slug" element={<ResumeGuideDetail />} />
        <Route path="/layoffs-tracker" element={<LayoffsTracker />} />

        <Route element={<ProtectedLayout />}>
          <Route path="/resume-upload" element={<ResumeUpload />} />
          <Route path="/jd-upload" element={<JdUpload />} />
          <Route path="/match" element={<MatchAnalyze />} />
        </Route>

        <Route
          path="/"
          element={
            localStorage.getItem("token") ? (
              <Navigate to="/resume-upload" replace />
            ) : (
              <Landing />
            )
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;