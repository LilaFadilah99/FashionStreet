import { Link } from "react-router-dom";
import LoginImage from "../assets/login.png";
import { ToastContainer } from "react-toastify";

const LoginForm = ({ input, handleSubmit, handleInput }) => {
  return (
    <>
      <main className="d-flex min-vh-100 justify-content-center align-items-center" style={{ backgroundColor: "#fadce4" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-12 col-xl-10 shadow rounded-6">
              <div className="form row justify-content-center py-md-0 py-5" style={{ backgroundColor: "#f8f8fe" }}>
                <div className="text-center d-md-none">
                  <h4>
                    Complete Your Knowledge <span>by Reading Digi-Traveller</span>
                  </h4>
                  <p className="text-secondary mt-1">Let's get started</p>
                </div>
                <div className="col-lg-5 col-md-5 col-7 p-2 my-auto">
                  <img src={LoginImage} className="img-fluid w-100" alt="Signup Logo" />
                </div>

                <div className="col-lg-6 col-md-6 col-12 p-lg-5 px-4 pe-md-2 py-md-5">
                  <div className="mb-4 d-none d-md-block">
                    <h4>
                      Complete Your Knowledge by<span>Reading Digi-Traveller</span>
                    </h4>
                    <p className="text-secondary mt-1">Let's get started</p>
                  </div>

                  <form id="registForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlhtmlhtmlfor="email" className="form-label">
                        E-mail
                      </label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="far fa-at"></i>
                        </span>
                        <input type="email" className="form-control" placeholder="Enter your email" id="email" autoComplete="off" value={input.email} onChange={(e) => handleInput(e, "email")} />
                      </div>
                      <small className="text-danger d-none">Please enter a valid e-mail</small>
                    </div>

                    <div className="mb-3">
                      <label htmlhtmlhtmlfor="password" className="form-label">
                        Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="far fa-lock"></i>
                        </span>
                        <input type="password" className="form-control" placeholder="Enter your password" id="password" autoComplete="off" value={input.password} onChange={(e) => handleInput(e, "password")} />
                      </div>
                      <small className="text-secondary">At least 8 character, number and alphabet</small>
                    </div>

                    <div className="d-grid col-12 mt-md-4 mt-4 submit-button rounded">
                      <button type="submit" className="btn text-white bg-danger">
                        Login
                      </button>
                    </div>
                    {/* <!-- Google button -->
                  <div id="google-button-login" className="mt-2"></div> */}
                  </form>

                  <div className="mt-4">
                    <p className="mb-0">
                      Don't have an account?
                      <Link to="/register" className="text-primary text-decoration-none text-danger">
                        Register
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </main>
    </>
  );
};

export default LoginForm;
