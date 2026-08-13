import { useState } from "react";
import api from "../api/axiosConfig";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import Loader from "../components/ui/Loader.jsx";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!file) {
      setError("Please select a PDF file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      // Deliberately NOT setting a Content-Type header here —
      // axios auto-generates the correct multipart boundary from FormData.
      // Setting it manually would actually break the upload.
      const response = await api.post("/resume/upload", formData);
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Resume upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-lg flex flex-col gap-5">
        <h2 className="text-2xl">Upload Resume</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-text-muted">Resume PDF</label>
            <label
              htmlFor="resume-file"
              className="cursor-pointer px-3.5 py-2.5 rounded-md bg-panel border border-line text-text-muted hover:border-signal transition-colors text-sm truncate"
            >
              {file ? file.name : "Choose a PDF file..."}
            </label>
            <input
              id="resume-file"
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2">
            {loading && <Loader size={16} />}
            {loading ? "Uploading..." : "Upload"}
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

export default ResumeUpload;