import React, { Component } from "react";
import MessageItem from "./MessageItem";

export default class HeaderMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
    this.initialState = this.state;
  }

  componentDidMount = () => {
    let messages = [
      {
        title: "Brad Diesel",
        displayPicture: "dist/img/user2-160x160.jpg",
        content: "Call me whenever you can...",
        time: "5 mins",
      },
      {
        title: "John Pierce",
        displayPicture: "dist/img/user1-128x128.jpg",
        content: "I got your message bro",
        time: "2 hours",
      },
      {
        title: "Developers",
        displayPicture: "dist/img/user4-128x128.jpg",
        content: "The subject goes here",
        time: "Today",
      },
      {
        title: "Support Team",
        displayPicture: "dist/img/user6-128x128.jpg",
        content: "The subject goes here",
        time: "Today",
      },
      {
        title: "Sales Department",
        displayPicture: "dist/img/user5-128x128.jpg",
        content: "Why not buy a awesome theme?",
        time: "Yesterday",
      },
    ];

    this.setState({
      messages: messages,
    });
  };

  render() {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-comments" />
          <span className="badge badge-danger navbar-badge">
            {this.state.messages.length}
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <h6 class="dropdown-header">
            You have {this.state.messages.length} messages.
          </h6>
          <div className="scroll-menu">

          {this.state.messages.map((message, index) => {
            return (
              <MessageItem
              key={index}
              title={message.title}
              displayPicture={message.displayPicture}
              time={message.time}
              content={message.content}
              />
              );
            })}
            </div>
          <a href="#" className="dropdown-item dropdown-header">
            See All Messages
          </a>
        </div>
      </li>
    );
  }
}
