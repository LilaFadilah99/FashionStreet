import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handle_logout } from "../store/actions/user";
// import { useEffect } from "react";

const Navbar = () => {
  const access_token = localStorage.access_token;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(handle_logout()).then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
        <div className="d-flex align-items-center">
          <i className="fas fa-align-left fs-4 me-3" id="menu-toggle"></i>
          <h2 className="fs-2 m-0" style={{ color: "#3e3b64" }}>
            Dashboard
          </h2>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-p" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-user me-2"></i>Account
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {!access_token && (
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                )}

                {access_token && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#" onClick={handleLogout}>
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
