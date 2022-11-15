import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { handle_logout } from "../store/actions/user";
// import { useEffect } from "react";

const ProtectRouter = ({ children }) => {
  // const isLogin = true;
  // const access_token = localStorage.access_token;
  // const navigate = useNavigate();

  const { access_token } = useSelector((state) => state.user);
  const { role } = useSelector((state) => state.user);
  console.log(role);

  if (!access_token) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children || <Outlet />;
};

export default ProtectRouter;
