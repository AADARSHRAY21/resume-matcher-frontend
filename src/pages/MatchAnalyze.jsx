import { useState } from "react";
import api from "../api/axiosConfig";
import Card from "../components/ui/Card.jsx";
import Textarea from "../components/ui/Textarea.jsx";
import Button from "../components/ui/Button.jsx";
import Loader from "../components/ui/Loader.jsx";
import MatchResultsKeyword from "../components/results/MatchResultsKeyword.jsx";
import MatchResultsAI from "../components/results/MatchResultsAI.jsx";

function MatchAnalyze() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [resultType, setResultType] = useState(null); // 'keyword' | 'ai'
  const [error, setError] = useState(null);
  const [loadingType, setLoadingType] = useState(null); // 'keyword' | 'ai' | null

  const runAnalysis = async (endpoint, type) => {
    setError(null);
    setResult(null);
    setResultType(null);

    if (!resumeText.trim() || !jobDescription.trim()) {
      setError("Both resume text and job description are required");
      return;
    }

    setLoadingType(type);
    try {
      const response = await api.post(endpoint, { resumeText, jobDescription });
      setResult(response.data);
      setResultType(type);
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data || "Match analysis failed");
    } finally {
      setLoadingType(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl flex flex-col gap-5">
        <h2 className="text-2xl">Match Analysis</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Textarea
            label="Resume Text"
            rows={8}
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Paste resume rawText here..."
          />
          <Textarea
            label="Job Description"
            rows={8}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste job description here..."
          />
        </div>

        <div className="flex gap-3">
          <Button
            variant="secondary"
            disabled={loadingType !== null}
            onClick={() => runAnalysis("/match/analyze", "keyword")}
            className="flex items-center gap-2"
          >
            {loadingType === "keyword" && <Loader size={16} />}
            Analyze (Keyword)
          </Button>
          <Button
            disabled={loadingType !== null}
            onClick={() => runAnalysis("/match/ai-analyze", "ai")}
            className="flex items-center gap-2"
          >
            {loadingType === "ai" && <Loader size={16} />}
            Analyze (AI)
          </Button>
        </div>

        {result && resultType === "keyword" && <MatchResultsKeyword data={result} />}
        {result && resultType === "ai" && <MatchResultsAI data={result} />}

        {result && (
          <details className="text-xs">
            <summary className="cursor-pointer text-text-muted hover:text-text">Raw response</summary>
            <pre className="bg-void border border-line rounded-md p-3 mt-2 font-mono text-match whitespace-pre-wrap break-words max-h-72 overflow-y-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </details>
        )}

        {error && (
          <p className="text-sm text-gap">
            {typeof error === "string" ? error : JSON.stringify(error)}
          </p>
        )}
      </Card>
    </div>
  );
}

export default MatchAnalyze;