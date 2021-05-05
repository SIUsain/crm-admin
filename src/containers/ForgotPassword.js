import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FogotPassword extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="login-logo">
            <Link to="/">
              <b>Admin</b>LTE
            </Link>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">
                You forgot your password? Here you can easily retrieve a new
                password.
              </p>
              <form action="recover-password.html" method="post">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-block">
                      Request new password
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <p className="mt-3 mb-1">
                <Link to="/">Login</Link>
              </p>
              <p className="mb-0">
                <Link to="register" className="text-center">
                  Register a new membership
                </Link>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    );
  }
}
