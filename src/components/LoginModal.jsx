/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function LoginModal({
  isLogin,
  toggleLogin,
  handleChange,
  error,
  loading,
  form,
  // eslint-disable-next-line react/prop-types
  handleSubmit,
}) {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div className="modal show d-block" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">{isLogin ? "Login" : "Sign Up"}</h5>
          </div>
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger" role="alert">
                <i className="bi bi-exclamation-triangle mt-2"></i>
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group mb- c">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  onChange={handleChange}
                  value={form.username}
                  required
                  minLength="6"
                  maxLength="30"
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={form.password}
                  className="form-control"
                  id="password"
                  required
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mt-2 fw-bold"
                disabled={loading}
              >
                <i className="bi bi-shield"></i>
                {isLogin ? "Login" : "Register"}
              </button>
              <button
                onClick={toggleLogin}
                className="btn btn-link w-100 mt-3 text-decoration-none"
                disabled={loading}
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
