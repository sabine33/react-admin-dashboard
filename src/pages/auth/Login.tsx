import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { login, LoginState } from "../../store/slices/loginSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const navigation = useNavigate();
  const [isLoggedIn] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigation("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <div className="card m-3">
      <h4 className="card-header bg-secondary p-3 text-white">Login</h4>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-4">
            <label>Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="invalid-feedback">Error</div>
          </div>
          <div className="form-group mt-4">
            <label>Password</label>
            <input name="password" type="password" className="form-control" />
          </div>
          <div className="form-group mt-4">
            <button className="btn btn-primary">
              {/* <span
                v-show="isSubmitting"
                className="spinner-border spinner-border-sm mr-1"
              ></span> */}
              Login
            </button>
            <Link to="register" className="btn btn-link">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
