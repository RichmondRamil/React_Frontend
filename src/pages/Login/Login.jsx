import React, { useRef, useState, useEffect } from "react";
import useAuth from "./../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "./login.scss";

const LOGIN_URL = "/auth";
const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  // const location = useLocation();
  // const from = "/";

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, password, roles, accessToken });
      setEmail("");
      setPassword("");
      navigate("/", { replace: true });
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (error.response?.status === 401) {
        setErrMsg(`Please check your email and password.`);
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="login-container">
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="register-title">
          <h1>Sign In your Account</h1>
          <p>
            Don't have an account?
            <span>
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button>Continue</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
