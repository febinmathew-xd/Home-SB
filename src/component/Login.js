import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import { ToastContainer } from "react-toastify";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { onLogin } = useContext(AuthenticationContext);
  return (
    <>
      <link rel="stylesheet" href="css/custom.css" disabled />
      <link rel="stylesheet" href="css/bootstrap.min.css" disabled />

      <ToastContainer />
      <div className="content">
        <div
          className="row"
          style={{ position: "absolute", top: "100px", left: "500px" }}
        >
          <div className="col-md-6">
            <h1>LOGIN</h1>
            <br />
            <div className="form-floating mb-3">
              <input
                type="name"
                className="form-control"
                id="floatingInput"
                placeholder="Username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                style={{ width: "500%" }}
              />
              {/*<label for="floatingInput">Username</label>*/}
            </div>

            <div className="form-floating mb-3">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
                id="floatingInput"
                placeholder="Password"
                style={{ width: "500%", marginTop: "20px" }}
              />
              {/*<label for="floatingInput">Password</label>*/}
            </div>

            <button
              type="button"
              className="btn btn-danger ml-2"
              onClick={(e) => {
                onLogin(email, password);
              }}
              style={{
                position: "absolute",
                top: "200px",
                left: "80px",
                width: "100px",
              }}
            >
              Sign In
            </button>
            <Link
              to="/register"
              className="btn btn-danger ml-2"
              style={{
                position: "absolute",
                top: "200px",
                left: "200px",
                width: "200px",
              }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <img src="/images/loginimg.jpg" align="right" width="750" height="800" />
    </>
  );
}
export default Login;
