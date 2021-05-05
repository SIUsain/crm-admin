import React, { Component } from "react";

export class Searchbar extends Component {
  state = { input: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.input);
  };

  render() {
    return (
      <form className="form-inline ml-3" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-sm">
          <input
            onChange={(e) => this.setState({ input: e.target.value })}
            className="form-control form-control-navbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-navbar" type="submit">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Searchbar;
