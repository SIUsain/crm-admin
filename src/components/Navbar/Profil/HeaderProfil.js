import React, { Component } from "react";

export default class HeaderProfil extends Component {
  render() {
    return (
      <li className="nav-item dropdown">
        <a href="#" className="nav-link" data-toggle="dropdown">
        <i className="fas fa-th-large" />
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-2">
          {/* User image */}
          <div className="dropdown-header">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle img-size-50"
              alt="User Image"
            />
            <p>
              Alexander Pierce - Web Developer
              <p><small>Member since Nov. 2012</small></p>
            </p>
          </div>
          {/* Menu Footer */}
          <div className=" m-2">
              <a href="#" className="btn btn-primary btn-sm float-left">
                Profile
              </a>
              <a href="#" className="btn btn-secondary btn-sm float-right">
                Sign out
              </a>
            </div>
          
        </div>
      </li>
    );
  }
}
