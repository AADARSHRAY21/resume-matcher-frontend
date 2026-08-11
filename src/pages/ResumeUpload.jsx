import { useState } from "react";
import api from "../api/axiosConfig";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

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

    try {
      // Deliberately NOT setting a Content-Type header here —
      // axios auto-generates the correct multipart boundary from FormData.
      // Setting it manually would actually break the upload.
      const response = await api.post("/resume/upload", formData);
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Resume upload failed");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upload Resume</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default ResumeUpload;