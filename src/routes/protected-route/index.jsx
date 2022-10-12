import { Navigate, useLocation } from "react-router-dom";
import { memoryStrings, routes, sls } from "../../utils";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  let token = sls.decode(memoryStrings.authorization);
  if (!token) {
    return <Navigate to={routes.login} state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;
