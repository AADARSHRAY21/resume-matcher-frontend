import { useState } from "react";
import api from "../api/axiosConfig";

function MatchAnalyze() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const runAnalysis = async (endpoint) => {
    setError(null);
    setResult(null);

    if (!resumeText.trim() || !jobDescription.trim()) {
      setError("Both resume text and job description are required");
      return;
    }

    try {
      const response = await api.post(endpoint, { resumeText, jobDescription });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data || "Match analysis failed");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Match Analysis</h2>

      <div>
        <label>Resume Text:</label><br />
        <textarea
          rows={8}
          cols={60}
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          placeholder="Paste resume rawText here..."
        />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label>Job Description:</label><br />
        <textarea
          rows={8}
          cols={60}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste job description here..."
        />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => runAnalysis("/match/analyze")}>
          Analyze (Keyword)
        </button>{" "}
        <button onClick={() => runAnalysis("/match/ai-analyze")}>
          Analyze (AI)
        </button>
      </div>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      {error && <p style={{ color: "red" }}>{typeof error === "string" ? error : JSON.stringify(error)}</p>}
    </div>
  );
}

export default MatchAnalyze;