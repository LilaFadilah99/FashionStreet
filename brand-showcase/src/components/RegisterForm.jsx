import RegisterImage from "../assets/login.png";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const RegisterForm = ({ input, handleInput, handleRegister }) => {
  return (
    <>
      <div>
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
                    <img src={RegisterImage} className="img-fluid w-100" alt="Signup Logo" />
                  </div>

                  <div className="col-lg-6 col-md-6 col-12 p-lg-5 px-4 pe-md-2 py-md-5">
                    <div className="mb-4 d-none d-md-block">
                      <h4>
                        Complete Your Knowledge by<span>Reading Digi-Traveller</span>
                      </h4>
                      <p className="text-secondary mt-1">Let's get started</p>
                    </div>

                    <form id="registForm" onSubmit={handleRegister}>
                      <div className="mb-3">
                        <label htmlhtmlfor="username" className="form-label">
                          Name
                        </label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="far fa-user"></i>
                          </span>
                          <input type="text" className="form-control" placeholder="Enter your name" id="username" autoComplete="off" value={input.username} onChange={(e) => handleInput(e, "username")} />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlhtmlfor="email" className="form-label">
                          E-mail
                        </label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="far fa-at"></i>
                          </span>
                          <input type="email" className="form-control" placeholder="Enter your email" id="email" autoComplete="off" value={input.email} onChange={(e) => handleInput(e, "email")} />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlhtmlfor="password" className="form-label">
                          Password
                        </label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="far fa-lock"></i>
                          </span>
                          <input type="password" className="form-control" placeholder="Enter your password" id="password" autoComplete="off" value={input.password} onChange={(e) => handleInput(e, "password")} />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlhtmlfor="phoneNumber" className="form-label">
                          Phone Number
                        </label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="far fa-phone"></i>
                          </span>
                          <input type="text" className="form-control" placeholder="Enter your phone number" id="phoneNumber" autoComplete="off" v-model="phoneNumber" value={input.phoneNumber} onChange={(e) => handleInput(e, "phoneNumber")} />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlhtmlfor="address" className="form-label">
                          Address
                        </label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="far fa-location"></i>
                          </span>
                          <input type="text" className="form-control" placeholder="Enter address" id="address" autoComplete="off" value={input.address} onChange={(e) => handleInput(e, "address")} />
                        </div>
                      </div>

                      <div className="d-grid col-12 mt-md-4 mt-4">
                        <button type="submit" className="btn bg-danger text-white">
                          Sign Up
                        </button>
                      </div>
                    </form>

                    <div className="mt-4">
                      <p className="mb-0">
                        Already have an account?&nbsp;
                        <Link className="text-primary text-decoration-none text-danger" to="/login">
                          Login
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
      </div>
    </>
  );
};

export default RegisterForm;
