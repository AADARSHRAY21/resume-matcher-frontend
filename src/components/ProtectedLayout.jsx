import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function ProtectedLayout() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
}