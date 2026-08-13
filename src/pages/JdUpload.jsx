import { useState } from "react";
import api from "../api/axiosConfig";
import Card from "../components/ui/Card.jsx";
import Textarea from "../components/ui/Textarea.jsx";
import Button from "../components/ui/Button.jsx";
import Loader from "../components/ui/Loader.jsx";

function JdUpload() {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const response = await api.post("/jd/upload", { jobDescription });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "JD upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-lg flex flex-col gap-5">
        <h2 className="text-2xl">Upload Job Description</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            rows={10}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
          />
          <Button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2">
            {loading && <Loader size={16} />}
            {loading ? "Submitting..." : "Submit JD"}
          </Button>
        </form>
        {result && (
          <pre className="bg-void border border-line rounded-md p-3 text-xs font-mono text-match whitespace-pre-wrap break-words max-h-72 overflow-y-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
        {error && <p className="text-sm text-gap">{error}</p>}
      </Card>
    </div>
  );
}

export default JdUpload;