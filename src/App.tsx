import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
      <Route path="/edit/:id" element={<ProtectedRoute><Edit /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}