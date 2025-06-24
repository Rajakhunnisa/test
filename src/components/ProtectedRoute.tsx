import { isAuthenticated } from "../utils";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}