import { Navigate } from "react-router-dom";
import { getAccessToken } from "../Helpers/Auth/tokens";

export default function ProtectedRoute({ children }) {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
