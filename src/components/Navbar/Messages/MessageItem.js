import React, { Component } from "react";

export default class MessageItem extends Component {
  render() {
    return (
       
        <>
        <a href="#" className="dropdown-item">
          <div className="media">
            <img
              src={this.props.displayPicture}
              className="img-circle img-size-32 mr-3"
              alt="User Image"
            />
          <div className="media-body">
          <h4 className="dropdown-item-title text-sm">
            {this.props.title}
            <small className="time text-muted font-weight-bold float-right">
              <i className="far fa-clock ml-2"></i> {this.props.time}
            </small>
          </h4>
          <p className="text-xs text-muted">{this.props.content}</p>
          </div>
          </div>
        </a>
          <div class="dropdown-divider"></div>
       </>
    );
  }
}
