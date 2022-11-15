import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handle_logout } from "../store/actions/user";

const UserNavbar = () => {
  const access_token = localStorage.access_token;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(handle_logout()).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-size userNavLink" id="navbarNav ">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Customer service
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  My D-vast
                </Link>
              </li>
              {!access_token && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Masuk Akun/Bergabung
                  </Link>
                </li>
              )}
              {access_token && (
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/favorite">
                  <i className="fa-solid fa-heart"></i>&nbsp; Favorite
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/shopping_bag">
                  <i className="fa-solid fa-bag-shopping"></i>&nbsp; Tas Belanja
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- nav 2 --> */}
      <div className="container mb-5">
        <h4 className="text-center text-danger">
          <Link to={"/products"} className={"text-decoration-none text-danger"}>
            FASHION
          </Link>
        </h4>
      </div>
      {/* <!-- nav 3 --> */}
      <nav className="navbar navbar-expand-lg" style={{ display: "none" }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center userNavLink3" id="navbarNav ">
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="#">
                  WANITA
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="#">
                  PRIA
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="#">
                  BAYI
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="#">
                  ANAK-ANAK
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="#">
                  SALE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
