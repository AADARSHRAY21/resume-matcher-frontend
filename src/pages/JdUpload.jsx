import { useState } from "react";
import api from "../api/axiosConfig";

function JdUpload() {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    try {
      const response = await api.post("/jd/upload", { jobDescription });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "JD upload failed");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upload Job Description</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows={10}
          cols={60}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the job description here..."
        />
        <br />
        <button type="submit">Submit JD</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default JdUpload;