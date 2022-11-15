import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { handle_logout } from "../store/actions/user";
// import { useEffect } from "react";

const AdminProtectRouter = ({ children }) => {
  // const isLogin = true;
  // const access_token = localStorage.access_token;
  // const navigate = useNavigate();

  const { role } = useSelector((state) => state.user);

  if (role !== "admin") {
    return <Navigate to={"/"} replace={true} />;
  }
  return children || <Outlet />;
};

export default AdminProtectRouter;
