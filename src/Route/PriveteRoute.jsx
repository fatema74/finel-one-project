import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PriveteRoute = ({ children }) => {
  const { user, setLoder } = useContext(AuthContext);

  const location = useLocation()


  if (setLoder) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PriveteRoute;