import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axiosConfig";
import Card from "../components/ui/Card.jsx";
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/resume-upload");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-sm flex flex-col gap-5">
        <h2 className="text-2xl">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </form>
        {error && <p className="text-sm text-gap">{error}</p>}
                <p className="text-sm text-text-muted text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-signal hover:underline">
            Sign up
          </Link>
        </p>
        
      </Card>
    </div>
  );
}

export default Login;