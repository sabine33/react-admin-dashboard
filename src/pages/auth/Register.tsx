import React, { FormEvent } from "react";
import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (e: FormEvent) => {};

  return (
    <div className="card m-3">
      <h4 className="card-header bg-secondary py-3 text-white">Signup</h4>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label>Email</label>
            <input name="email" type="email" className="form-control" />
            <div className="invalid-feedback"></div>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input name="password" type="password" className="form-control" />
            <div className="invalid-feedback"></div>
          </div>
          <div className="form-group mt-5">
            <label>Password Again</label>
            <input
              name="passwordAgain"
              type="password"
              className="form-control"
            />
            <div className="invalid-feedback"></div>
          </div>
          <div className="form-group mt-5">
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
            <Link to="/login" className="btn btn-link">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
