import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content";

export default class Dasbord extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Content />
      </div>
    );
  }
}
