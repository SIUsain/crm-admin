import React, { Component } from "react";

export default class MessageItem extends Component {
  render() {
    return (
       
        <>
        <a href="#" className="dropdown-item mr-1">
          <i className={this.props.theme}/>
          <small className="time text-muted font-weight-bold float-right">
              <i className="far fa-clock ml-2"></i> {this.props.time}
            </small>
            <p className="text-xs ml-1">
            {this.props.content}
            </p>
            
        </a>
          <div class="dropdown-divider"></div>
       </>
    );
  }
}
