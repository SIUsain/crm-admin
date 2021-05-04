import React, { Component } from "react";
import HeaderMessages from "./Messages/HeaderMessages";
import HeaderNotifications from "./Notifications/HeaderNotifications";
import HeaderProfil from "./Profil/HeaderProfil";
import Searchbar from "./Search/Searchbar";
import "./Navbar.css";

export default class Navbar extends Component {
 render() {
    return (
      <div>
        <nav className="main-header navbar navbar-expand navbar-lightblue navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#">
                <i className="fas fa-bars" />
              </a>
            </li>
          </ul>
          {/* SEARCH FORM */}
          <Searchbar />
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Messages Dropdown Menu */}
            <HeaderMessages />
            {/* Notifications Dropdown Menu */}
            <HeaderNotifications />
            <HeaderProfil />
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                href="#"
              >
                <i className="fas fa-cogs" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
